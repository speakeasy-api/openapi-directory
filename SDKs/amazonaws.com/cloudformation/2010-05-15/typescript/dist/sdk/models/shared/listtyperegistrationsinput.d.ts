import { SpeakeasyBase } from "../../../internal/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";
import { RegistryTypeEnum } from "./registrytypeenum";
export declare class ListTypeRegistrationsInput extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    registrationStatusFilter?: RegistrationStatusEnum;
    type?: RegistryTypeEnum;
    typeArn?: string;
    typeName?: string;
}
