import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardSecurityConfig } from "./modelcardsecurityconfig";
import { ModelCardStatusEnum } from "./modelcardstatusenum";
import { Tag } from "./tag";
export declare class CreateModelCardRequest extends SpeakeasyBase {
    content: string;
    modelCardName: string;
    modelCardStatus: ModelCardStatusEnum;
    securityConfig?: ModelCardSecurityConfig;
    tags?: Tag[];
}
