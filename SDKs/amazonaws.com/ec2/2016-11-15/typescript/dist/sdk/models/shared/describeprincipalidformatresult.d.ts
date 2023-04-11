import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the ID format for a resource.
 */
export declare class DescribePrincipalIdFormatResultPrincipalsStatuses extends SpeakeasyBase {
    deadline?: Date;
    resource?: string;
    useLongIds?: boolean;
}
/**
 * PrincipalIdFormat description
 */
export declare class DescribePrincipalIdFormatResultPrincipals extends SpeakeasyBase {
    arn?: string;
    statuses?: DescribePrincipalIdFormatResultPrincipalsStatuses[];
}
/**
 * Success
 */
export declare class DescribePrincipalIdFormatResult extends SpeakeasyBase {
    nextToken?: string;
    principals?: DescribePrincipalIdFormatResultPrincipals[];
}
