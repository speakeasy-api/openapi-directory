import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";
import { ConnectionAuthResponseParameters } from "./connectionauthresponseparameters";
import { ConnectionStateEnum } from "./connectionstateenum";
/**
 * Success
 */
export declare class DescribeConnectionResponse extends SpeakeasyBase {
    authParameters?: ConnectionAuthResponseParameters;
    authorizationType?: ConnectionAuthorizationTypeEnum;
    connectionArn?: string;
    connectionState?: ConnectionStateEnum;
    creationTime?: Date;
    description?: string;
    lastAuthorizedTime?: Date;
    lastModifiedTime?: Date;
    name?: string;
    secretArn?: string;
    stateReason?: string;
}
