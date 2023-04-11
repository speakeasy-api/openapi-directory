import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IssuesDeleteLabelRequest extends SpeakeasyBase {
    name: string;
    owner: string;
    repo: string;
}
export declare class IssuesDeleteLabelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
