import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
export declare class RescoreRequest extends SpeakeasyBase {
    documents: Document[];
    rescoreExecutionPlanId: string;
    searchQuery: string;
}
