import { SpeakeasyBase } from "../../../internal/utils";
import { ApiDestinationHttpMethodEnum } from "./apidestinationhttpmethodenum";
import { ApiDestinationStateEnum } from "./apidestinationstateenum";
/**
 * Success
 */
export declare class DescribeApiDestinationResponse extends SpeakeasyBase {
    apiDestinationArn?: string;
    apiDestinationState?: ApiDestinationStateEnum;
    connectionArn?: string;
    creationTime?: Date;
    description?: string;
    httpMethod?: ApiDestinationHttpMethodEnum;
    invocationEndpoint?: string;
    invocationRateLimitPerSecond?: number;
    lastModifiedTime?: Date;
    name?: string;
}
