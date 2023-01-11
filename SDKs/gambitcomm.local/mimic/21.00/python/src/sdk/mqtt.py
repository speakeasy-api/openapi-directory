import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Mqtt:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def protocol_mqtt_client_get_protstate(self, request: operations.ProtocolMqttClientGetProtstateRequest) -> operations.ProtocolMqttClientGetProtstateResponse:
        r"""Show the agent's MQTT TCP connection state
        0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/protstate", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientGetProtstateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_get_protstate_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_get_state(self, request: operations.ProtocolMqttClientGetStateRequest) -> operations.ProtocolMqttClientGetStateResponse:
        r"""Show the agent's MQTT state
        0 means stopped, 1 means running
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/state", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientGetStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_get_state_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_message_card(self, request: operations.ProtocolMqttClientMessageCardRequest) -> operations.ProtocolMqttClientMessageCardResponse:
        r"""Show the agent's current messages' cardinality
        0 or more
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/card", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientMessageCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_message_card_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_message_get(self, request: operations.ProtocolMqttClientMessageGetRequest) -> operations.ProtocolMqttClientMessageGetResponse:
        r"""Show the agent's message attributes
        Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/get/{msgNum}/{attr}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientMessageGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_mqtt_client_message_get_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_message_set(self, request: operations.ProtocolMqttClientMessageSetRequest) -> operations.ProtocolMqttClientMessageSetResponse:
        r"""Set the agent's message attributes
        Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/set/{msgNum}/{attr}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientMessageSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_mqtt_client_message_set_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_resubscribe(self, request: operations.ProtocolMqttClientResubscribeRequest) -> operations.ProtocolMqttClientResubscribeResponse:
        r"""Restart receiving messages from a subcription of the agent
        Restarts a subscription
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/resubscribe/{subNum}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientResubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_mqtt_client_resubscribe_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_runtime_abort(self, request: operations.ProtocolMqttClientRuntimeAbortRequest) -> operations.ProtocolMqttClientRuntimeAbortResponse:
        r"""Abort agent's MQTT TCP session without sending DISCONNECT command
        Abort a connection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/abort", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientRuntimeAbortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_mqtt_client_runtime_abort_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_runtime_connect(self, request: operations.ProtocolMqttClientRuntimeConnectRequest) -> operations.ProtocolMqttClientRuntimeConnectResponse:
        r"""Start agent's MQTT TCP session
        Start a connection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/connect", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientRuntimeConnectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_mqtt_client_runtime_connect_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_runtime_disconnect(self, request: operations.ProtocolMqttClientRuntimeDisconnectRequest) -> operations.ProtocolMqttClientRuntimeDisconnectResponse:
        r"""Disconnect agent's MQTT TCP session by sending DISCONNECT command
        Graceful disconnect
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/disconnect", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientRuntimeDisconnectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_mqtt_client_runtime_disconnect_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_broker(self, request: operations.ProtocolMqttClientSetBrokerRequest) -> operations.ProtocolMqttClientSetBrokerResponse:
        r"""Set the agent's MQTT TCP connection target broker
        Broker IP address
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/broker/{brokerAddr}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetBrokerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_set_broker_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_cleansession(self, request: operations.ProtocolMqttClientSetCleansessionRequest) -> operations.ProtocolMqttClientSetCleansessionResponse:
        r"""Set the agent's MQTT session
        1 for clean session , 0 not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/cleansession/{cleanOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetCleansessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_set_cleansession_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_clientid(self, request: operations.ProtocolMqttClientSetClientidRequest) -> operations.ProtocolMqttClientSetClientidResponse:
        r"""Set the agent's MQTT client ID
        MQTT client ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/clientid/{clientID}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetClientidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_set_clientid_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_keepalive(self, request: operations.ProtocolMqttClientSetKeepaliveRequest) -> operations.ProtocolMqttClientSetKeepaliveResponse:
        r"""Set the agent's MQTT TCP keepalive
        Keep alive the TCP connection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/keepalive/{aliveTime}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetKeepaliveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_set_keepalive_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_on_disconnect(self, request: operations.ProtocolMqttClientSetOnDisconnectRequest) -> operations.ProtocolMqttClientSetOnDisconnectResponse:
        r"""Set the agent's MQTT disconnection action
        Action to take when MQTT session is disconnected
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/on_disconnect/{action}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetOnDisconnectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_set_on_disconnect_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_password(self, request: operations.ProtocolMqttClientSetPasswordRequest) -> operations.ProtocolMqttClientSetPasswordResponse:
        r"""Set the agent's MQTT client password
        Client password
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/password/{password}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_set_password_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_port(self, request: operations.ProtocolMqttClientSetPortRequest) -> operations.ProtocolMqttClientSetPortResponse:
        r"""Set the agent's MQTT TCP connection target port
        target TCP port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/port/{port}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetPortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_set_port_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_username(self, request: operations.ProtocolMqttClientSetUsernameRequest) -> operations.ProtocolMqttClientSetUsernameResponse:
        r"""Set the agent's MQTT client username
        Client username
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/username/{username}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetUsernameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_set_username_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_willmsg(self, request: operations.ProtocolMqttClientSetWillmsgRequest) -> operations.ProtocolMqttClientSetWillmsgResponse:
        r"""Set the agent's MQTT client's will
        Will message
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willmsg/{msg}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetWillmsgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_set_willmsg_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_willqos(self, request: operations.ProtocolMqttClientSetWillqosRequest) -> operations.ProtocolMqttClientSetWillqosResponse:
        r"""Set the agent's MQTT will message's QOS field
        QOS field
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willqos/{qos}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetWillqosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_set_willqos_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_willretain(self, request: operations.ProtocolMqttClientSetWillretainRequest) -> operations.ProtocolMqttClientSetWillretainResponse:
        r"""Set the agent's MQTT retained will
        Retaining will
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willretain/{retain}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetWillretainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_set_willretain_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_set_willtopic(self, request: operations.ProtocolMqttClientSetWilltopicRequest) -> operations.ProtocolMqttClientSetWilltopicResponse:
        r"""Set the agent's MQTT client will's topic
        Will topic for the will message
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willtopic/{topic}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSetWilltopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_set_willtopic_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_subscribe_card(self, request: operations.ProtocolMqttClientSubscribeCardRequest) -> operations.ProtocolMqttClientSubscribeCardResponse:
        r"""Show the agent's current subscriptions' cardinality
        0 or more
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/card", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSubscribeCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_client_subscribe_card_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_subscribe_get(self, request: operations.ProtocolMqttClientSubscribeGetRequest) -> operations.ProtocolMqttClientSubscribeGetResponse:
        r"""Show the agent's subscription attributes
        Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/get/{subNum}/{attr}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSubscribeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_mqtt_client_subscribe_get_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_subscribe_set(self, request: operations.ProtocolMqttClientSubscribeSetRequest) -> operations.ProtocolMqttClientSubscribeSetResponse:
        r"""Set the agent's subscribe attributes
        Attribute can not be properties .
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/set/{subNum}/{attr}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientSubscribeSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_mqtt_client_subscribe_set_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_client_unsubscribe(self, request: operations.ProtocolMqttClientUnsubscribeRequest) -> operations.ProtocolMqttClientUnsubscribeResponse:
        r"""Stops receiving messages from a subcription of the agent
        Stops a subscription
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/unsubscribe/{subNum}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttClientUnsubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_mqtt_client_unsubscribe_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_get_args(self, request: operations.ProtocolMqttGetArgsRequest) -> operations.ProtocolMqttGetArgsResponse:
        r"""Show the agent's MQTT argument structure
        Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/args", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttGetArgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.protocol_mqtt_get_args_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_get_config(self, request: operations.ProtocolMqttGetConfigRequest) -> operations.ProtocolMqttGetConfigResponse:
        r"""Show the agent's MQTT configuration
        Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/config", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttGetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigMqtt])
                res.config_mqtt = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_get_statistics(self, request: operations.ProtocolMqttGetStatisticsRequest) -> operations.ProtocolMqttGetStatisticsResponse:
        r"""Show the agent's MQTT statistics
        Statistics of fields indicated in the headers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.protocol_mqtt_get_statistics_200_application_json_int32_integers = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_get_stats_hdr(self) -> operations.ProtocolMqttGetStatsHdrResponse:
        r"""Show the MQTT statistics headers
        The headers of statistics fields
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mimic/protocol/msg/mqtt/get/stats_hdr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttGetStatsHdrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.protocol_mqtt_get_stats_hdr_200_application_json_strings = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_get_trace(self, request: operations.ProtocolMqttGetTraceRequest) -> operations.ProtocolMqttGetTraceResponse:
        r"""Show the agent's MQTT traffic tracing
        Trace 1 means enabled, 0 means not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/trace", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttGetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigMqtt])
                res.config_mqtt = out
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_set_config(self, request: operations.ProtocolMqttSetConfigRequest) -> operations.ProtocolMqttSetConfigResponse:
        r"""Set the agent's MQTT configuration
        Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/config/{argument}/{value}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttSetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_mqtt_set_config_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def protocol_mqtt_set_trace(self, request: operations.ProtocolMqttSetTraceRequest) -> operations.ProtocolMqttSetTraceResponse:
        r"""Set the agent's MQTT traffic tracing
        1 to enable, 0 to disable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/trace/{enableOrNot}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProtocolMqttSetTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.protocol_mqtt_set_trace_200_application_json_string = r.content
        elif r.status_code == 400:
            pass

        return res

    