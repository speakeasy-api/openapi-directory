import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookTypeEnum } from "./notebooktypeenum";
export declare class ImportNotebookInput extends SpeakeasyBase {
    clientRequestToken?: string;
    name: string;
    payload: string;
    type: NotebookTypeEnum;
    workGroup: string;
}
