import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
import { LifecyclePolicyPreviewFilter } from "./lifecyclepolicypreviewfilter";
export declare class GetLifecyclePolicyPreviewRequest extends SpeakeasyBase {
    filter?: LifecyclePolicyPreviewFilter;
    imageIds?: ImageIdentifier[];
    maxResults?: number;
    nextToken?: string;
    registryId?: string;
    repositoryName: string;
}
