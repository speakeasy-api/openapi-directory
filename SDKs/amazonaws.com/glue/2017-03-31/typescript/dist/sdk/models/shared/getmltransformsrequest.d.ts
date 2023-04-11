import { SpeakeasyBase } from "../../../internal/utils";
import { TransformFilterCriteria } from "./transformfiltercriteria";
import { TransformSortCriteria } from "./transformsortcriteria";
export declare class GetMLTransformsRequest extends SpeakeasyBase {
    filter?: TransformFilterCriteria;
    maxResults?: number;
    nextToken?: string;
    sort?: TransformSortCriteria;
}
