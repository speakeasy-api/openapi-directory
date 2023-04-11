import { SpeakeasyBase } from "../../../internal/utils";
import { RegistrationMetadataItem } from "./registrationmetadataitem";
import { Tag } from "./tag";
export declare class CreateActivationRequest extends SpeakeasyBase {
    defaultInstanceName?: string;
    description?: string;
    expirationDate?: Date;
    iamRole: string;
    registrationLimit?: number;
    registrationMetadata?: RegistrationMetadataItem[];
    tags?: Tag[];
}
