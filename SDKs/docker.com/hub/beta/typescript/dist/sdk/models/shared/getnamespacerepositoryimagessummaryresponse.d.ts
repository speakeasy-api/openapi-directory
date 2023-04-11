import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNamespaceRepositoryImagesSummaryResponseStatistics extends SpeakeasyBase {
    /**
     * Number of images counted as active in this repository.
     */
    active?: number;
    /**
     * Number of images counted as inactive in this repository.
     */
    inactive?: number;
    /**
     * Number of images in this repository.
     */
    total?: number;
}
/**
 * Summary information for images in a repository.
 */
export declare class GetNamespaceRepositoryImagesSummaryResponse extends SpeakeasyBase {
    /**
     * Time from which an image must have been pushed or pulled to be counted as active.
     */
    activeFrom?: string;
    statistics?: GetNamespaceRepositoryImagesSummaryResponseStatistics;
}
