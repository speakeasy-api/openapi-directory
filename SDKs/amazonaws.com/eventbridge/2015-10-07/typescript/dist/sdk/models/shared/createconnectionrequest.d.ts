import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";
import { CreateConnectionAuthRequestParameters } from "./createconnectionauthrequestparameters";
export declare class CreateConnectionRequest extends SpeakeasyBase {
    authParameters: CreateConnectionAuthRequestParameters;
    authorizationType: ConnectionAuthorizationTypeEnum;
    description?: string;
    name: string;
}
