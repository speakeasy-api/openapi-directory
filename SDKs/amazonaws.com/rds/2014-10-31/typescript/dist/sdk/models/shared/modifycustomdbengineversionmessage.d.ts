import { SpeakeasyBase } from "../../../internal/utils";
import { CustomEngineVersionStatusEnum } from "./customengineversionstatusenum";
export declare class ModifyCustomDBEngineVersionMessage extends SpeakeasyBase {
    description?: string;
    engine: string;
    engineVersion: string;
    status?: CustomEngineVersionStatusEnum;
}
