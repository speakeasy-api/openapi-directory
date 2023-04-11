import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorResource } from "./connectorresource";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * ConnectorResources
 */
export declare class GetConnectorResourceResponse extends SpeakeasyBase {
    data: ConnectorResource;
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
