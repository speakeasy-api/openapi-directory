import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScoreRevisionDataSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * The format of the file you will retrieve
 */
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
export declare class GetScoreRevisionDataRequest extends SpeakeasyBase {
    /**
     * The format of the file you will retrieve
     */
    format: GetScoreRevisionDataFormatEnum;
    /**
     * Only return files already generated and cached in Flat's production
     *
     * @remarks
     * cache. If the file is not availabe, a 404 will be returned
     *
     */
    onlyCached?: boolean;
    /**
     * An optional a set of parts uuid to be exported. This parameter must be composed of parts uuids
     *
     * @remarks
     * separated by commas. For example "59df645f-bb1c-f1b4-b573-d2afc4491f94,34ef645f-1aef-f3bc-1564-34cca4492b87".
     *
     */
    parts?: string;
    /**
     * Unique identifier of a score revision. You can use `last` to fetch the information related to the last version created.
     *
     * @remarks
     *
     */
    revision: string;
    /**
     * Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
     *
     * @remarks
     *
     */
    score: string;
    /**
     * This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
     *
     * @remarks
     *
     */
    sharingKey?: string;
    /**
     * Returns a json with the `url` in it instead of redirecting
     *
     * @remarks
     *
     */
    url?: boolean;
}
export declare class GetScoreRevisionDataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Account overquota
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Revision data
     */
    getScoreRevisionData200ApplicationJSONBinaryString?: Uint8Array;
    /**
     * Revision data
     */
    getScoreRevisionData200ApplicationVndRecordareMusicxmlPlusXmlBinaryString?: Uint8Array;
    /**
     * Revision data
     */
    getScoreRevisionData200ApplicationVndRecordareMusicxmlBinaryString?: Uint8Array;
    /**
     * Revision data
     */
    getScoreRevisionData200AudioMidiBinaryString?: Uint8Array;
    /**
     * Revision data
     */
    getScoreRevisionData200AudioMp3BinaryString?: Uint8Array;
    /**
     * Revision data
     */
    getScoreRevisionData200AudioWavBinaryString?: Uint8Array;
    /**
     * Revision data
     */
    getScoreRevisionData200ImagePngBinaryString?: Uint8Array;
}
