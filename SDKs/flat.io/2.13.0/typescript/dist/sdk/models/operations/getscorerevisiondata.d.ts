import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetScoreRevisionDataFormatEnum {
    Json = "json",
    Mxl = "mxl",
    Xml = "xml",
    Mp3 = "mp3",
    Wav = "wav",
    Midi = "midi",
    ThumbnailPng = "thumbnail.png",
    SynchronizationPoints = "synchronizationPoints"
}
export declare class GetScoreRevisionDataPathParams extends SpeakeasyBase {
    format: GetScoreRevisionDataFormatEnum;
    revision: string;
    score: string;
}
export declare class GetScoreRevisionDataQueryParams extends SpeakeasyBase {
    onlyCached?: boolean;
    parts?: string;
    sharingKey?: string;
    url?: boolean;
}
export declare class GetScoreRevisionDataSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetScoreRevisionDataRequest extends SpeakeasyBase {
    pathParams: GetScoreRevisionDataPathParams;
    queryParams: GetScoreRevisionDataQueryParams;
    security: GetScoreRevisionDataSecurity;
}
export declare class GetScoreRevisionDataResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    getScoreRevisionData200ApplicationJSONBinaryString?: Uint8Array;
    getScoreRevisionData200ApplicationVndRecordareMusicxmlPlusXmlBinaryString?: Uint8Array;
    getScoreRevisionData200ApplicationVndRecordareMusicxmlBinaryString?: Uint8Array;
    getScoreRevisionData200AudioMidiBinaryString?: Uint8Array;
    getScoreRevisionData200AudioMp3BinaryString?: Uint8Array;
    getScoreRevisionData200AudioWavBinaryString?: Uint8Array;
    getScoreRevisionData200ImagePngBinaryString?: Uint8Array;
}
