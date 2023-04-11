import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How pagination is implemented on this connector. Native mode means Apideck is using the pagination parameters of the connector. With virtual pagination, the connector does not support pagination, but Apideck emulates it.
 */
export declare enum PaginationCoverageModeEnum {
    Native = "native",
    Virtual = "virtual"
}
export declare class PaginationCoverage extends SpeakeasyBase {
    /**
     * Indicates whether the connector supports changing the page size by using the limit parameter.
     */
    limitSupport?: boolean;
    /**
     * How pagination is implemented on this connector. Native mode means Apideck is using the pagination parameters of the connector. With virtual pagination, the connector does not support pagination, but Apideck emulates it.
     */
    mode?: PaginationCoverageModeEnum;
    /**
     * Indicates whether the connector supports paging through results using the cursor parameter.
     */
    pagingSupport?: boolean;
}
