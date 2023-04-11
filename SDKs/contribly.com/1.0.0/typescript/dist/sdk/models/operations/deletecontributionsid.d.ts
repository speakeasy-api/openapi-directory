import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteContributionsIdRequest extends SpeakeasyBase {
    /**
     * Id of the contribution to delete
     */
    id: string;
}
export declare class DeleteContributionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The deletion request has been accepted and will be processed in the background.
     */
    contribution?: shared.Contribution;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
