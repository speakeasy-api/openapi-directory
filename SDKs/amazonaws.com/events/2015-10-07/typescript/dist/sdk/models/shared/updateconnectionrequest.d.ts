import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";
import { UpdateConnectionAuthRequestParameters } from "./updateconnectionauthrequestparameters";
export declare class UpdateConnectionRequest extends SpeakeasyBase {
    authParameters?: UpdateConnectionAuthRequestParameters;
    authorizationType?: ConnectionAuthorizationTypeEnum;
    description?: string;
    name: string;
}
