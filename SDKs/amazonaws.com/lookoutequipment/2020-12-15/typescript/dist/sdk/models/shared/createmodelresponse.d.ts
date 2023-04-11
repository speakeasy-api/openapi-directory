import { SpeakeasyBase } from "../../../internal/utils";
import { ModelStatusEnum } from "./modelstatusenum";
/**
 * Success
 */
export declare class CreateModelResponse extends SpeakeasyBase {
    modelArn?: string;
    status?: ModelStatusEnum;
}
