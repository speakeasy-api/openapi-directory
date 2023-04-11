import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { Filters } from "./filters";
import { SortByEnum } from "./sortbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListCertificatesRequest extends SpeakeasyBase {
    certificateStatuses?: CertificateStatusEnum[];
    includes?: Filters;
    maxItems?: number;
    nextToken?: string;
    sortBy?: SortByEnum;
    sortOrder?: SortOrderEnum;
}
