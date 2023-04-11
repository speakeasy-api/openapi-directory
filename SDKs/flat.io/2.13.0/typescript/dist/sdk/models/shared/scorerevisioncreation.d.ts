import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The optional encoding of the score data. This property must match the encoding used for the `data` property.
 */
export declare enum ScoreRevisionCreationDataEncodingEnum {
    Base64 = "base64"
}
/**
 * A new created revision
 */
export declare class ScoreRevisionCreation extends SpeakeasyBase {
    /**
     * Must be set to `true` if the revision was created automatically.
     *
     * @remarks
     *
     */
    autosave?: boolean;
    /**
     * The data of the score file. It must be a MusicXML 3 file (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI file (`audio/midi`) or a Flat.json (aka Adagio.json) file.
     *
     * @remarks
     * Binary payloads (`vnd.recordare.musicxml` and `audio/midi`) can be encoded in Base64, in this case the `dataEncoding` property must match the encoding used for the API request.
     *
     */
    data: string;
    /**
     * The optional encoding of the score data. This property must match the encoding used for the `data` property.
     */
    dataEncoding?: ScoreRevisionCreationDataEncodingEnum;
    /**
     * A description associated to the revision
     */
    description?: string;
}
