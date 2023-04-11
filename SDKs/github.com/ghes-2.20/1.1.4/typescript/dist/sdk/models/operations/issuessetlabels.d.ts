import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesSetLabelsRequestBody4 extends SpeakeasyBase {
    name: string;
}
export declare class IssuesSetLabelsRequestBody3Labels extends SpeakeasyBase {
    name: string;
}
export declare class IssuesSetLabelsRequestBody3 extends SpeakeasyBase {
    labels?: IssuesSetLabelsRequestBody3Labels[];
}
export declare class IssuesSetLabelsRequestBody1 extends SpeakeasyBase {
    /**
     * The names of the labels to add to the issue. You can pass an empty array to remove all labels. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.
     */
    labels?: string[];
}
export declare class IssuesSetLabelsRequest extends SpeakeasyBase {
    requestBody?: any;
    /**
     * issue_number parameter
     */
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesSetLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Gone
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    labels?: shared.Label[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
