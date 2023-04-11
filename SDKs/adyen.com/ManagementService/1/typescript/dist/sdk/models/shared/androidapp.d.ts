import { SpeakeasyBase } from "../../../internal/utils";
export declare class AndroidApp extends SpeakeasyBase {
    /**
     * The description that was provided when uploading the app. The description is not shown on the terminal.
     */
    description?: string;
    /**
     * The unique identifier of the app.
     */
    id: string;
    /**
     * The app name that is shown on the terminal.
     */
    label?: string;
    /**
     * The package name of the app.
     */
    packageName?: string;
    /**
     * The status of the app. Possible values:
     *
     * @remarks
     * * `processing`: The app is being signed and converted to a format that the terminal can handle.
     * * `error`: Something went wrong. Check that the app matches the [requirements](https://docs.adyen.com/point-of-sale/android-terminals/app-requirements).
     * * `invalid`: There is something wrong with the APK file of the app.
     * * `ready`: The app has been signed and converted.
     * * `archived`: The app is no longer available.
     */
    status: string;
    /**
     * The internal version number of the app.
     */
    versionCode?: number;
    /**
     * The app version number that is shown on the terminal.
     */
    versionName?: string;
}
