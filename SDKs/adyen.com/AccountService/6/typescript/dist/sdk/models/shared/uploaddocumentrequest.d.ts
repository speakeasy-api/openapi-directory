import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentDetail } from "./documentdetail";
export declare class UploadDocumentRequest extends SpeakeasyBase {
    /**
     * The content of the document, in Base64-encoded string format.
     *
     * @remarks
     *
     * To learn about document requirements, refer to [Verification checks](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks).
     */
    documentContent: string;
    documentDetail: DocumentDetail;
}
