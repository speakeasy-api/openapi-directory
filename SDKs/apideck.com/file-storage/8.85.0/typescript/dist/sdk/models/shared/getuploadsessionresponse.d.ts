import { SpeakeasyBase } from "../../../internal/utils";
import { UploadSession } from "./uploadsession";
export declare class GetUploadSessionResponse extends SpeakeasyBase {
    data: UploadSession;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
