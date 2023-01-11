import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
export declare class GetOperationsForResourceResult extends SpeakeasyBase {
    nextPageCount?: Record<string, any>;
    nextPageToken?: string;
    operations?: Operation[];
}
