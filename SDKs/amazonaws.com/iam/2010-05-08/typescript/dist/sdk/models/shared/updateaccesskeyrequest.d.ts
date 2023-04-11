import { SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
export declare class UpdateAccessKeyRequest extends SpeakeasyBase {
    accessKeyId: string;
    status: StatusTypeEnum;
    userName?: string;
}
