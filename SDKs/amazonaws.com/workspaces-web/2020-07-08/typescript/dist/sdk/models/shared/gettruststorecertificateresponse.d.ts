import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
/**
 * Success
 */
export declare class GetTrustStoreCertificateResponse extends SpeakeasyBase {
    certificate?: Certificate;
    trustStoreArn?: string;
}
