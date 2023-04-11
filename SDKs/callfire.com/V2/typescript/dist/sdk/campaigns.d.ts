import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Campaigns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a specific sound
     *
     * @remarks
     * Deletes a single campaign sound instance for a specific campaign sound id, this operation does not delete sound completely, it sets sound status to ARCHIVED which means that sound will no longer appear in 'find' operation results, but still accessible via 'get' operation
     */
    deleteCampaignSound(req: operations.DeleteCampaignSoundRequest, security: operations.DeleteCampaignSoundSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCampaignSoundResponse>;
    /**
     * Find sounds
     *
     * @remarks
     * To find all campaign sounds which were created by user. Returns all sounds available to be used in campaigns
     */
    findCampaignSounds(req: operations.FindCampaignSoundsRequest, security: operations.FindCampaignSoundsSecurity, config?: AxiosRequestConfig): Promise<operations.FindCampaignSoundsResponse>;
    /**
     * Find a specific batch
     *
     * @remarks
     * Returns a single Batch instance for a given batch id. This API is useful for determining the state of a validating batch
     */
    getCampaignBatch(req: operations.GetCampaignBatchRequest, security: operations.GetCampaignBatchSecurity, config?: AxiosRequestConfig): Promise<operations.GetCampaignBatchResponse>;
    /**
     * Find a specific sound
     *
     * @remarks
     * Returns a single CampaignSound instance for a given sound id in campaign. This is a meta data to the sounds. No audio data is returned from this API
     */
    getCampaignSound(req: operations.GetCampaignSoundRequest, security: operations.GetCampaignSoundSecurity, config?: AxiosRequestConfig): Promise<operations.GetCampaignSoundResponse>;
    /**
     * Download a MP3 sound
     *
     * @remarks
     * Download the MP3 version of a hosted file. This is an audio data endpoint. Returns binary response of the 'audio/mpeg' content type
     */
    getCampaignSoundDataMp3(req: operations.GetCampaignSoundDataMp3Request, security: operations.GetCampaignSoundDataMp3Security, config?: AxiosRequestConfig): Promise<operations.GetCampaignSoundDataMp3Response>;
    /**
     * Download a WAV sound
     *
     * @remarks
     * Download the WAV version of the hosted file. This is an audio data endpoint. Returns binary response of the 'audio/mpeg' content type
     */
    getCampaignSoundDataWav(req: operations.GetCampaignSoundDataWavRequest, security: operations.GetCampaignSoundDataWavSecurity, config?: AxiosRequestConfig): Promise<operations.GetCampaignSoundDataWavResponse>;
    /**
     * Add sound via call
     *
     * @remarks
     * Use this API to create a sound via a phone call. Provide the required phone number in the CallCreateSound object inside the request, and user will receive a call shortly after with instructions on how to record a sound over the phone.
     */
    postCallCampaignSound(req: operations.PostCallCampaignSoundRequest, security: operations.PostCallCampaignSoundSecurity, config?: AxiosRequestConfig): Promise<operations.PostCallCampaignSoundResponse>;
    /**
     * Add sound via file
     *
     * @remarks
     * Create a campaign sound file via a supplied .mp3 or .wav file
     */
    postFileCampaignSound(req: operations.PostFileCampaignSoundRequest, security: operations.PostFileCampaignSoundSecurity, config?: AxiosRequestConfig): Promise<operations.PostFileCampaignSoundResponse>;
    /**
     * Add sound via text-to-speech
     *
     * @remarks
     * Use this API to create a sound file via a supplied string of text. Add a text in the TextToSpeech.message field, and pick a voice in the TextToSpeech.voice field. Available voices are: MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1
     */
    postTTSCampaignSound(req: operations.PostTTSCampaignSoundRequest, security: operations.PostTTSCampaignSoundSecurity, config?: AxiosRequestConfig): Promise<operations.PostTTSCampaignSoundResponse>;
    /**
     * Update a batch
     *
     * @remarks
     * Updates a single Batch instance, currently batch can only be turned "on/off"
     */
    updateCampaignBatch(req: operations.UpdateCampaignBatchRequest, security: operations.UpdateCampaignBatchSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCampaignBatchResponse>;
}
