import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPregameWinProbabilitiesQueryParams extends SpeakeasyBase {
    seasonType?: string;
    team?: string;
    week?: number;
    year?: number;
}
export declare class GetPregameWinProbabilitiesRequest extends SpeakeasyBase {
    queryParams: GetPregameWinProbabilitiesQueryParams;
}
export declare class GetPregameWinProbabilitiesResponse extends SpeakeasyBase {
    contentType: string;
    pregameWPS?: shared.PregameWp[];
    statusCode: number;
}
