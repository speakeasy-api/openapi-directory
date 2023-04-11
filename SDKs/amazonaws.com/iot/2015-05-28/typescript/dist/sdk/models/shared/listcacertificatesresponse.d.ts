import { SpeakeasyBase } from "../../../internal/utils";
import { CACertificate } from "./cacertificate";
/**
 * The output from the ListCACertificates operation.
 */
export declare class ListCACertificatesResponse extends SpeakeasyBase {
    certificates?: CACertificate[];
    nextMarker?: string;
}
