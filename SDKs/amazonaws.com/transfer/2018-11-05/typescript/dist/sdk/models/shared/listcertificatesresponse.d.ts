import { SpeakeasyBase } from "../../../internal/utils";
import { ListedCertificate } from "./listedcertificate";
/**
 * Success
 */
export declare class ListCertificatesResponse extends SpeakeasyBase {
    certificates: ListedCertificate[];
    nextToken?: string;
}
