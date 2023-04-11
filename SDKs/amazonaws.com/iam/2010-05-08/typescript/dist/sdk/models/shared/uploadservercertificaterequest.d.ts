import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class UploadServerCertificateRequest extends SpeakeasyBase {
    certificateBody: string;
    certificateChain?: string;
    path?: string;
    privateKey: string;
    serverCertificateName: string;
    tags?: Tag[];
}
