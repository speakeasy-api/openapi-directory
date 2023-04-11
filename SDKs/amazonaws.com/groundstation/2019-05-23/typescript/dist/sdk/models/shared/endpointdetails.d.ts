import { SpeakeasyBase } from "../../../internal/utils";
import { AwsGroundStationAgentEndpoint } from "./awsgroundstationagentendpoint";
import { DataflowEndpoint } from "./dataflowendpoint";
import { SecurityDetails } from "./securitydetails";
/**
 * Information about the endpoint details.
 */
export declare class EndpointDetails extends SpeakeasyBase {
    awsGroundStationAgentEndpoint?: AwsGroundStationAgentEndpoint;
    endpoint?: DataflowEndpoint;
    securityDetails?: SecurityDetails;
}
