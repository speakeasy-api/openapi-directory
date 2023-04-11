import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardStatusEnum } from "./modelcardstatusenum";
export declare class UpdateModelCardRequest extends SpeakeasyBase {
    content?: string;
    modelCardName: string;
    modelCardStatus?: ModelCardStatusEnum;
}
