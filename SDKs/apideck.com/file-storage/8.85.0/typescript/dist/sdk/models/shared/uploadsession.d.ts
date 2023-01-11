import { SpeakeasyBase } from "../../../internal/utils";
export declare class UploadSession extends SpeakeasyBase {
    expiresAt?: Date;
    id?: string;
    parallelUploadSupported?: boolean;
    partSize?: number;
    success?: boolean;
    uploadedByteRange?: string;
}
