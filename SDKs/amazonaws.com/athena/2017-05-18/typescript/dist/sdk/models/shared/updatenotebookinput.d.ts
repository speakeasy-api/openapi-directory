import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookTypeEnum } from "./notebooktypeenum";
export declare class UpdateNotebookInput extends SpeakeasyBase {
    clientRequestToken?: string;
    notebookId: string;
    payload: string;
    sessionId?: string;
    type: NotebookTypeEnum;
}
