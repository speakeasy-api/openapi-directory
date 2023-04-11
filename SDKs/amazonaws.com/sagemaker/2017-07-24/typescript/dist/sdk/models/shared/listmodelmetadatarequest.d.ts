import { SpeakeasyBase } from "../../../internal/utils";
import { ModelMetadataSearchExpression } from "./modelmetadatasearchexpression";
export declare class ListModelMetadataRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    searchExpression?: ModelMetadataSearchExpression;
}
