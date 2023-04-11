import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://amplifyuibuilder.{region}.amazonaws.com", "https://amplifyuibuilder.{region}.amazonaws.com", "http://amplifyuibuilder.{region}.amazonaws.com.cn", "https://amplifyuibuilder.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p>The Amplify UI Builder API provides a programmatic interface for creating and configuring user interface (UI) component libraries and themes for use in your Amplify applications. You can then connect these UI components to an application's backend Amazon Web Services resources.</p> <p>You can also use the Amplify Studio visual designer to create UI components and model data for an app. For more information, see <a href="https://docs.amplify.aws/console/adminui/intro">Introduction</a> in the <i>Amplify Docs</i>.</p> <p>The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework</a>. For more information about deploying an Amplify application to Amazon Web Services, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify User Guide</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/amplifyuibuilder/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Creates a new component for an Amplify app.
     */
    createComponent(req: operations.CreateComponentRequest, config?: AxiosRequestConfig): Promise<operations.CreateComponentResponse>;
    /**
     * Creates a new form for an Amplify app.
     */
    createForm(req: operations.CreateFormRequest, config?: AxiosRequestConfig): Promise<operations.CreateFormResponse>;
    /**
     * Creates a theme to apply to the components in an Amplify app.
     */
    createTheme(req: operations.CreateThemeRequest, config?: AxiosRequestConfig): Promise<operations.CreateThemeResponse>;
    /**
     * Deletes a component from an Amplify app.
     */
    deleteComponent(req: operations.DeleteComponentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteComponentResponse>;
    /**
     * Deletes a form from an Amplify app.
     */
    deleteForm(req: operations.DeleteFormRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFormResponse>;
    /**
     * Deletes a theme from an Amplify app.
     */
    deleteTheme(req: operations.DeleteThemeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThemeResponse>;
    /**
     * Exchanges an access code for a token.
     */
    exchangeCodeForToken(req: operations.ExchangeCodeForTokenRequest, config?: AxiosRequestConfig): Promise<operations.ExchangeCodeForTokenResponse>;
    /**
     * Exports component configurations to code that is ready to integrate into an Amplify app.
     */
    exportComponents(req: operations.ExportComponentsRequest, config?: AxiosRequestConfig): Promise<operations.ExportComponentsResponse>;
    /**
     * Exports form configurations to code that is ready to integrate into an Amplify app.
     */
    exportForms(req: operations.ExportFormsRequest, config?: AxiosRequestConfig): Promise<operations.ExportFormsResponse>;
    /**
     * Exports theme configurations to code that is ready to integrate into an Amplify app.
     */
    exportThemes(req: operations.ExportThemesRequest, config?: AxiosRequestConfig): Promise<operations.ExportThemesResponse>;
    /**
     * Returns an existing component for an Amplify app.
     */
    getComponent(req: operations.GetComponentRequest, config?: AxiosRequestConfig): Promise<operations.GetComponentResponse>;
    /**
     * Returns an existing form for an Amplify app.
     */
    getForm(req: operations.GetFormRequest, config?: AxiosRequestConfig): Promise<operations.GetFormResponse>;
    /**
     * Returns existing metadata for an Amplify app.
     */
    getMetadata(req: operations.GetMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetMetadataResponse>;
    /**
     * Returns an existing theme for an Amplify app.
     */
    getTheme(req: operations.GetThemeRequest, config?: AxiosRequestConfig): Promise<operations.GetThemeResponse>;
    /**
     * Retrieves a list of components for a specified Amplify app and backend environment.
     */
    listComponents(req: operations.ListComponentsRequest, config?: AxiosRequestConfig): Promise<operations.ListComponentsResponse>;
    /**
     * Retrieves a list of forms for a specified Amplify app and backend environment.
     */
    listForms(req: operations.ListFormsRequest, config?: AxiosRequestConfig): Promise<operations.ListFormsResponse>;
    /**
     * Retrieves a list of themes for a specified Amplify app and backend environment.
     */
    listThemes(req: operations.ListThemesRequest, config?: AxiosRequestConfig): Promise<operations.ListThemesResponse>;
    /**
     * Stores the metadata information about a feature on a form or view.
     */
    putMetadataFlag(req: operations.PutMetadataFlagRequest, config?: AxiosRequestConfig): Promise<operations.PutMetadataFlagResponse>;
    /**
     * Refreshes a previously issued access token that might have expired.
     */
    refreshToken(req: operations.RefreshTokenRequest, config?: AxiosRequestConfig): Promise<operations.RefreshTokenResponse>;
    /**
     * Updates an existing component.
     */
    updateComponent(req: operations.UpdateComponentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateComponentResponse>;
    /**
     * Updates an existing form.
     */
    updateForm(req: operations.UpdateFormRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFormResponse>;
    /**
     * Updates an existing theme.
     */
    updateTheme(req: operations.UpdateThemeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateThemeResponse>;
}
