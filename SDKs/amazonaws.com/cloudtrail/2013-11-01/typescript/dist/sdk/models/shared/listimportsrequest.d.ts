import { SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
export declare class ListImportsRequest extends SpeakeasyBase {
    destination?: string;
    importStatus?: ImportStatusEnum;
    maxResults?: number;
    nextToken?: string;
}
