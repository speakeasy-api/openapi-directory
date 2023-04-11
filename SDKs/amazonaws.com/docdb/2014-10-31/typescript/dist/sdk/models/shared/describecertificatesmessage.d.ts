import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeCertificatesMessage extends SpeakeasyBase {
    certificateIdentifier?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
