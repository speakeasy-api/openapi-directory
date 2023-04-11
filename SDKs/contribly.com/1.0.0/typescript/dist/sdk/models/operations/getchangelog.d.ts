import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChangeLogResponse extends SpeakeasyBase {
    /**
     * A list of change log items
     */
    changeLogItems?: shared.ChangeLogItem[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
