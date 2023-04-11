import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScriptsDifferenceModelChangeTypeEnum {
    Nochange = "NOCHANGE",
    Added = "ADDED",
    Changed = "CHANGED",
    Deleted = "DELETED",
    Ignored = "IGNORED",
    ChangedCodeInvalid = "CHANGED_CODE_INVALID",
    ChangedNameInvalid = "CHANGED_NAME_INVALID"
}
export declare class ScriptsDifferenceModel extends SpeakeasyBase {
    bind?: string;
    changeType?: ScriptsDifferenceModelChangeTypeEnum;
    fileName?: string;
    script1?: string;
    script2?: string;
    type?: string;
}
