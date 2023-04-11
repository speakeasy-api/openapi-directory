import { SpeakeasyBase } from "../../../internal/utils";
import { TransformFilterCriteria } from "./transformfiltercriteria";
import { TransformSortCriteria } from "./transformsortcriteria";
export declare class ListMLTransformsRequest extends SpeakeasyBase {
    filter?: TransformFilterCriteria;
    maxResults?: number;
    nextToken?: string;
    sort?: TransformSortCriteria;
    tags?: Record<string, string>;
}
