import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Avatars service aims to help you complete everyday tasks related to your app image, icons, and avatars.
 */
export declare class Avatars {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Browser Icon
     *
     * @remarks
     * You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user /account/sessions endpoint. Use width, height and quality arguments to change the output settings.
     */
    avatarsGetBrowser(req: operations.AvatarsGetBrowserRequest, security: operations.AvatarsGetBrowserSecurity, config?: AxiosRequestConfig): Promise<operations.AvatarsGetBrowserResponse>;
    /**
     * Get Credit Card Icon
     *
     * @remarks
     * The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.
     */
    avatarsGetCreditCard(req: operations.AvatarsGetCreditCardRequest, security: operations.AvatarsGetCreditCardSecurity, config?: AxiosRequestConfig): Promise<operations.AvatarsGetCreditCardResponse>;
    /**
     * Get Favicon
     *
     * @remarks
     * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.
     *
     */
    avatarsGetFavicon(req: operations.AvatarsGetFaviconRequest, security: operations.AvatarsGetFaviconSecurity, config?: AxiosRequestConfig): Promise<operations.AvatarsGetFaviconResponse>;
    /**
     * Get Country Flag
     *
     * @remarks
     * You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings.
     */
    avatarsGetFlag(req: operations.AvatarsGetFlagRequest, security: operations.AvatarsGetFlagSecurity, config?: AxiosRequestConfig): Promise<operations.AvatarsGetFlagResponse>;
    /**
     * Get Image from URL
     *
     * @remarks
     * Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.
     */
    avatarsGetImage(req: operations.AvatarsGetImageRequest, security: operations.AvatarsGetImageSecurity, config?: AxiosRequestConfig): Promise<operations.AvatarsGetImageResponse>;
    /**
     * Get User Initials
     *
     * @remarks
     * Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.
     *
     * You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.
     */
    avatarsGetInitials(req: operations.AvatarsGetInitialsRequest, security: operations.AvatarsGetInitialsSecurity, config?: AxiosRequestConfig): Promise<operations.AvatarsGetInitialsResponse>;
    /**
     * Get QR Code
     *
     * @remarks
     * Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.
     */
    avatarsGetQR(req: operations.AvatarsGetQRRequest, security: operations.AvatarsGetQRSecurity, config?: AxiosRequestConfig): Promise<operations.AvatarsGetQRResponse>;
}
