import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * <p/>
 */
export declare class DescribeCertificatesMessage extends SpeakeasyBase {
    certificateIdentifier?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
