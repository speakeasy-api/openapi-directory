import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the path.
**/
export declare class CreateNetworkInsightsPathResultNetworkInsightsPath extends SpeakeasyBase {
    createdDate?: Record<string, any>;
    destination?: Record<string, any>;
    destinationIp?: Record<string, any>;
    destinationPort?: Record<string, any>;
    networkInsightsPathArn?: Record<string, any>;
    networkInsightsPathId?: Record<string, any>;
    protocol?: Record<string, any>;
    source?: Record<string, any>;
    sourceIp?: Record<string, any>;
    tags?: Record<string, any>;
}
export declare class CreateNetworkInsightsPathResult extends SpeakeasyBase {
    networkInsightsPath?: CreateNetworkInsightsPathResultNetworkInsightsPath;
}
