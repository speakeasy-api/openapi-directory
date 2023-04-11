import { SpeakeasyBase } from "../../../internal/utils";
export declare class DownloadDBLogFilePortionMessage extends SpeakeasyBase {
    dbInstanceIdentifier: string;
    logFileName: string;
    marker?: string;
    numberOfLines?: number;
}
