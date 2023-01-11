

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;



public class SDK {
	public static final String[] SERVERS = {
		"https://geodesystems.com:443/",
	};
  	
  	public ServiceMediaTabularExtractsheet serviceMediaTabularExtractsheet;
  	public Type2017BoulderElectionExpenditures type2017BoulderElectionExpenditures;
  	public TypeAny typeAny;
  	public TypeBeforeafter typeBeforeafter;
  	public TypeBiblio typeBiblio;
  	public TypeBioDicom typeBioDicom;
  	public TypeBioDicomTest typeBioDicomTest;
  	public TypeBioFasta typeBioFasta;
  	public TypeBioFastq typeBioFastq;
  	public TypeBioHmmerIndex typeBioHmmerIndex;
  	public TypeBioOmeTiff typeBioOmeTiff;
  	public TypeBioOntologyAssay typeBioOntologyAssay;
  	public TypeBioOntologyCohort typeBioOntologyCohort;
  	public TypeBioOntologyPerson typeBioOntologyPerson;
  	public TypeBioOntologySample typeBioOntologySample;
  	public TypeBioOntologySeries typeBioOntologySeries;
  	public TypeBioOntologyStudy typeBioOntologyStudy;
  	public TypeBioSam typeBioSam;
  	public TypeBioSfPdb typeBioSfPdb;
  	public TypeBioSra typeBioSra;
  	public TypeBioStockholm typeBioStockholm;
  	public TypeBioTaxonomy typeBioTaxonomy;
  	public TypeBlogentry typeBlogentry;
  	public TypeBolderRentalHousing typeBolderRentalHousing;
  	public TypeBookmarks typeBookmarks;
  	public TypeBostonCrime typeBostonCrime;
  	public TypeBoulder2017ElectionContributions typeBoulder2017ElectionContributions;
  	public TypeBoulderCampaignContributions typeBoulderCampaignContributions;
  	public TypeBoulderConsultingServices typeBoulderConsultingServices;
  	public TypeBoulderCountyVoterDetails typeBoulderCountyVoterDetails;
  	public TypeBoulderCrimes typeBoulderCrimes;
  	public TypeBoulderEmails typeBoulderEmails;
  	public TypeBoulderEmployeeSalaries typeBoulderEmployeeSalaries;
  	public TypeCalendar typeCalendar;
  	public TypeCampaignDonors typeCampaignDonors;
  	public TypeCampaignExpenditures typeCampaignExpenditures;
  	public TypeCataloglink typeCataloglink;
  	public TypeCdmGrid typeCdmGrid;
  	public TypeChatroom typeChatroom;
  	public TypeColoradoWaterRights typeColoradoWaterRights;
  	public TypeCommitteeDonations typeCommitteeDonations;
  	public TypeCommunityDatahub typeCommunityDatahub;
  	public TypeCommunityResource typeCommunityResource;
  	public TypeConstructionPermits typeConstructionPermits;
  	public TypeContact typeContact;
  	public TypeDbCoIndicators typeDbCoIndicators;
  	public TypeEarthSatelliteLandsat typeEarthSatelliteLandsat;
  	public TypeFaq typeFaq;
  	public TypeFecPacs typeFecPacs;
  	public TypeFeccandidates typeFeccandidates;
  	public TypeFeed typeFeed;
  	public TypeFile typeFile;
  	public TypeFitsData typeFitsData;
  	public TypeFtp typeFtp;
  	public TypeGadgetsCountdown typeGadgetsCountdown;
  	public TypeGadgetsStock typeGadgetsStock;
  	public TypeGadgetsWeather typeGadgetsWeather;
  	public TypeGazeteerCensusTracts typeGazeteerCensusTracts;
  	public TypeGazeteerCounties typeGazeteerCounties;
  	public TypeGeoGe typeGeoGe;
  	public TypeGeoGeotiff typeGeoGeotiff;
  	public TypeGeoGpx typeGeoGpx;
  	public TypeGeoHdf5 typeGeoHdf5;
  	public TypeGeoKml typeGeoKml;
  	public TypeGeoShapefile typeGeoShapefile;
  	public TypeGeoShapefileFips typeGeoShapefileFips;
  	public TypeGlossary typeGlossary;
  	public TypeGridaggregation typeGridaggregation;
  	public TypeGroup typeGroup;
  	public TypeHipchatGroup typeHipchatGroup;
  	public TypeHomepage typeHomepage;
  	public TypeIncident typeIncident;
  	public TypeJeopardy typeJeopardy;
  	public TypeLatlonimage typeLatlonimage;
  	public TypeLidarCollection typeLidarCollection;
  	public TypeLidarLas typeLidarLas;
  	public TypeLidarLvis typeLidarLvis;
  	public TypeLink typeLink;
  	public TypeLocalfiles typeLocalfiles;
  	public TypeLocations typeLocations;
  	public TypeMapGooglemap typeMapGooglemap;
  	public TypeMediaAudiofile typeMediaAudiofile;
  	public TypeMediaImageloop typeMediaImageloop;
  	public TypeMediaPhotoalbum typeMediaPhotoalbum;
  	public TypeMediaVideoChannel typeMediaVideoChannel;
  	public TypeMediaVideoQuicktime typeMediaVideoQuicktime;
  	public TypeMediaYoutubevideo typeMediaYoutubevideo;
  	public TypeNotes typeNotes;
  	public TypeNotesJsonfile typeNotesJsonfile;
  	public TypeNotesNote typeNotesNote;
  	public TypeNotesNotebook typeNotesNotebook;
  	public TypeNwsfeed typeNwsfeed;
  	public TypeOpendaplink typeOpendaplink;
  	public TypeOwlClass typeOwlClass;
  	public TypeOwlOntology typeOwlOntology;
  	public TypePasteitentry typePasteitentry;
  	public TypePointText typePointText;
  	public TypePoliceStopData typePoliceStopData;
  	public TypePoll typePoll;
  	public TypeProjectCampaign typeProjectCampaign;
  	public TypeProjectCasestudy typeProjectCasestudy;
  	public TypeProjectContribution typeProjectContribution;
  	public TypeProjectDataformat typeProjectDataformat;
  	public TypeProjectDataset typeProjectDataset;
  	public TypeProjectDeployment typeProjectDeployment;
  	public TypeProjectExperiment typeProjectExperiment;
  	public TypeProjectFieldnote typeProjectFieldnote;
  	public TypeProjectGpsControlpoints typeProjectGpsControlpoints;
  	public TypeProjectGpsRaw typeProjectGpsRaw;
  	public TypeProjectGpsRinex typeProjectGpsRinex;
  	public TypeProjectInstrument typeProjectInstrument;
  	public TypeProjectLearningResource typeProjectLearningResource;
  	public TypeProjectMeeting typeProjectMeeting;
  	public TypeProjectOrganization typeProjectOrganization;
  	public TypeProjectProgram typeProjectProgram;
  	public TypeProjectProject typeProjectProject;
  	public TypeProjectService typeProjectService;
  	public TypeProjectSite typeProjectSite;
  	public TypeProjectSoftwarepackage typeProjectSoftwarepackage;
  	public TypeProjectStandardName typeProjectStandardName;
  	public TypeProjectSurveylocation typeProjectSurveylocation;
  	public TypeProjectTerm typeProjectTerm;
  	public TypeProjectVisit typeProjectVisit;
  	public TypeProjectVocabulary typeProjectVocabulary;
  	public TypePropertySales typePropertySales;
  	public TypePropertydb typePropertydb;
  	public TypePythonNotebook typePythonNotebook;
  	public TypeSlackTeam typeSlackTeam;
  	public TypeStatusboard typeStatusboard;
  	public TypeSunrisesunset typeSunrisesunset;
  	public TypeTasks typeTasks;
  	public TypeTmdbmovies typeTmdbmovies;
  	public TypeTodo typeTodo;
  	public TypeTripEvent typeTripEvent;
  	public TypeTripFlight typeTripFlight;
  	public TypeTripHotel typeTripHotel;
  	public TypeTripReport typeTripReport;
  	public TypeTripTrip typeTripTrip;
  	public TypeTypeAwcMetar typeTypeAwcMetar;
  	public TypeTypeBizStockseries typeTypeBizStockseries;
  	public TypeTypeBlsSeries typeTypeBlsSeries;
  	public TypeTypeBlsSurvey typeTypeBlsSurvey;
  	public TypeTypeCensusAcs typeTypeCensusAcs;
  	public TypeTypeDaymet typeTypeDaymet;
  	public TypeTypeDbTable typeTypeDbTable;
  	public TypeTypeDocumentCsv typeTypeDocumentCsv;
  	public TypeTypeDocumentDoc typeTypeDocumentDoc;
  	public TypeTypeDocumentHtml typeTypeDocumentHtml;
  	public TypeTypeDocumentPdf typeTypeDocumentPdf;
  	public TypeTypeDocumentPpt typeTypeDocumentPpt;
  	public TypeTypeDocumentXls typeTypeDocumentXls;
  	public TypeTypeDrilsdownCasestudy typeTypeDrilsdownCasestudy;
  	public TypeTypeEdgarFiling typeTypeEdgarFiling;
  	public TypeTypeEiaCategory typeTypeEiaCategory;
  	public TypeTypeEiaSeries typeTypeEiaSeries;
  	public TypeTypeEsriFeatureserver typeTypeEsriFeatureserver;
  	public TypeTypeEsriGeometryserver typeTypeEsriGeometryserver;
  	public TypeTypeEsriGpserver typeTypeEsriGpserver;
  	public TypeTypeEsriImageserver typeTypeEsriImageserver;
  	public TypeTypeEsriLayer typeTypeEsriLayer;
  	public TypeTypeEsriMapserver typeTypeEsriMapserver;
  	public TypeTypeEsriRestfolder typeTypeEsriRestfolder;
  	public TypeTypeEsriRestserver typeTypeEsriRestserver;
  	public TypeTypeEsriRestservice typeTypeEsriRestservice;
  	public TypeTypeExtremes typeTypeExtremes;
  	public TypeTypeFredCategory typeTypeFredCategory;
  	public TypeTypeFredSeries typeTypeFredSeries;
  	public TypeTypeGtfsAgency typeTypeGtfsAgency;
  	public TypeTypeGtfsRoute typeTypeGtfsRoute;
  	public TypeTypeGtfsRoutes typeTypeGtfsRoutes;
  	public TypeTypeGtfsStop typeTypeGtfsStop;
  	public TypeTypeGtfsStops typeTypeGtfsStops;
  	public TypeTypeGtfsTrip typeTypeGtfsTrip;
  	public TypeTypeHazarddata typeTypeHazarddata;
  	public TypeTypeHydroColorado typeTypeHydroColorado;
  	public TypeTypeIdvBundle typeTypeIdvBundle;
  	public TypeTypeImage typeTypeImage;
  	public TypeTypeImageAirport typeTypeImageAirport;
  	public TypeTypeImageWebcam typeTypeImageWebcam;
  	public TypeTypeMb typeTypeMb;
  	public TypeTypeMbCollection typeTypeMbCollection;
  	public TypeTypeMbPointBasic typeTypeMbPointBasic;
  	public TypeTypeMetametaDictionary typeTypeMetametaDictionary;
  	public TypeTypeMetametaField typeTypeMetametaField;
  	public TypeTypeNasaames typeTypeNasaames;
  	public TypeTypeNcss typeTypeNcss;
  	public TypeTypeNitf typeTypeNitf;
  	public TypeTypePointAmerifluxLevel2 typeTypePointAmerifluxLevel2;
  	public TypeTypePointAmrcFinal typeTypePointAmrcFinal;
  	public TypeTypePointAmrcFreewave typeTypePointAmrcFreewave;
  	public TypeTypePointCzo typeTypePointCzo;
  	public TypeTypePointGcnet typeTypePointGcnet;
  	public TypeTypePointGeomagIaga2002 typeTypePointGeomagIaga2002;
  	public TypeTypePointHydroWaterml typeTypePointHydroWaterml;
  	public TypeTypePointIcebridgeAtmIcessn typeTypePointIcebridgeAtmIcessn;
  	public TypeTypePointIcebridgeAtmQfit typeTypePointIcebridgeAtmQfit;
  	public TypeTypePointIcebridgeMccordsIrmcr2 typeTypePointIcebridgeMccordsIrmcr2;
  	public TypeTypePointIcebridgeMccordsIrmcr3 typeTypePointIcebridgeMccordsIrmcr3;
  	public TypeTypePointIcebridgeParis typeTypePointIcebridgeParis;
  	public TypeTypePointIdv typeTypePointIdv;
  	public TypeTypePointInline typeTypePointInline;
  	public TypeTypePointNcdcClimate typeTypePointNcdcClimate;
  	public TypeTypePointNetcdf typeTypePointNetcdf;
  	public TypeTypePointNoaaCarbon typeTypePointNoaaCarbon;
  	public TypeTypePointNoaaFlaskEvent typeTypePointNoaaFlaskEvent;
  	public TypeTypePointNoaaFlaskMonth typeTypePointNoaaFlaskMonth;
  	public TypeTypePointNoaaMadis typeTypePointNoaaMadis;
  	public TypeTypePointNoaaTower typeTypePointNoaaTower;
  	public TypeTypePointOceanCnv typeTypePointOceanCnv;
  	public TypeTypePointOceanCsvSadoTts typeTypePointOceanCsvSadoTTS;
  	public TypeTypePointOceanCsvSadoMeteo typeTypePointOceanCsvSadoMeteo;
  	public TypeTypePointOceanCsvSadoPosition typeTypePointOceanCsvSadoPosition;
  	public TypeTypePointOceanNetcdfGlider typeTypePointOceanNetcdfGlider;
  	public TypeTypePointOceanNetcdfTrack typeTypePointOceanNetcdfTrack;
  	public TypeTypePointOceanOoiDmgx typeTypePointOceanOoiDmgx;
  	public TypeTypePointOpenaq typeTypePointOpenaq;
  	public TypeTypePointPboPositionTimeSeries typeTypePointPboPositionTimeSeries;
  	public TypeTypePointSimpleRecords typeTypePointSimpleRecords;
  	public TypeTypePointSnotel typeTypePointSnotel;
  	public TypeTypePointText typeTypePointText;
  	public TypeTypePointWsbbGgp typeTypePointWsbbGgp;
  	public TypeTypePsdMonthlyClimateIndex typeTypePsdMonthlyClimateIndex;
  	public TypeTypeQuandlSeries typeTypeQuandlSeries;
  	public TypeTypeServiceGroup typeTypeServiceGroup;
  	public TypeTypeServiceLink typeTypeServiceLink;
  	public TypeTypeSocrataSeries typeTypeSocrataSeries;
  	public TypeTypeSoundingCod typeTypeSoundingCod;
  	public TypeTypeSoundingFrd typeTypeSoundingFrd;
  	public TypeTypeSoundingGsd typeTypeSoundingGsd;
  	public TypeTypeSoundingWyoming typeTypeSoundingWyoming;
  	public TypeTypeTmy typeTypeTmy;
  	public TypeTypeTweet typeTypeTweet;
  	public TypeTypeUsgsGauge typeTypeUsgsGauge;
  	public TypeTypeVirtual typeTypeVirtual;
  	public TypeTypeWmsCapabilities typeTypeWmsCapabilities;
  	public TypeTypeWmsLayer typeTypeWmsLayer;
  	public TypeUfoSightings typeUfoSightings;
  	public TypeUsPlaces typeUsPlaces;
  	public TypeVoteYesno typeVoteYesno;
  	public TypeWeblog typeWeblog;
  	public TypeWikipage typeWikipage;	

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		public Builder setServerURL(String serverUrl) {
			this.serverUrl = serverUrl;
			return this;
		}
		
		public Builder setServerURL(String serverUrl, java.util.Map<String, String> params) {
			this.serverUrl = serverUrl;
			this.params = params;
			return this;
		}
		
		public SDK build() throws Exception {
			return new SDK(this.client, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (this._securityClient == null) {
			this._securityClient = this._defaultClient;
		}

		if (serverUrl != null && !serverUrl.isBlank()) {
			this._serverUrl = openapisdk.utils.Utils.replaceParameters(serverUrl, params);
		}
		
		if (this._serverUrl == null) {
			this._serverUrl = SERVERS[0];
		}
		
		this.serviceMediaTabularExtractsheet = new ServiceMediaTabularExtractsheet(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.type2017BoulderElectionExpenditures = new Type2017BoulderElectionExpenditures(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeAny = new TypeAny(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBeforeafter = new TypeBeforeafter(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBiblio = new TypeBiblio(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioDicom = new TypeBioDicom(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioDicomTest = new TypeBioDicomTest(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioFasta = new TypeBioFasta(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioFastq = new TypeBioFastq(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioHmmerIndex = new TypeBioHmmerIndex(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioOmeTiff = new TypeBioOmeTiff(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioOntologyAssay = new TypeBioOntologyAssay(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioOntologyCohort = new TypeBioOntologyCohort(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioOntologyPerson = new TypeBioOntologyPerson(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioOntologySample = new TypeBioOntologySample(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioOntologySeries = new TypeBioOntologySeries(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioOntologyStudy = new TypeBioOntologyStudy(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioSam = new TypeBioSam(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioSfPdb = new TypeBioSfPdb(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioSra = new TypeBioSra(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioStockholm = new TypeBioStockholm(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBioTaxonomy = new TypeBioTaxonomy(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBlogentry = new TypeBlogentry(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBolderRentalHousing = new TypeBolderRentalHousing(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBookmarks = new TypeBookmarks(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBostonCrime = new TypeBostonCrime(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBoulder2017ElectionContributions = new TypeBoulder2017ElectionContributions(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBoulderCampaignContributions = new TypeBoulderCampaignContributions(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBoulderConsultingServices = new TypeBoulderConsultingServices(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBoulderCountyVoterDetails = new TypeBoulderCountyVoterDetails(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBoulderCrimes = new TypeBoulderCrimes(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBoulderEmails = new TypeBoulderEmails(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeBoulderEmployeeSalaries = new TypeBoulderEmployeeSalaries(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeCalendar = new TypeCalendar(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeCampaignDonors = new TypeCampaignDonors(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeCampaignExpenditures = new TypeCampaignExpenditures(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeCataloglink = new TypeCataloglink(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeCdmGrid = new TypeCdmGrid(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeChatroom = new TypeChatroom(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeColoradoWaterRights = new TypeColoradoWaterRights(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeCommitteeDonations = new TypeCommitteeDonations(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeCommunityDatahub = new TypeCommunityDatahub(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeCommunityResource = new TypeCommunityResource(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeConstructionPermits = new TypeConstructionPermits(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeContact = new TypeContact(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeDbCoIndicators = new TypeDbCoIndicators(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeEarthSatelliteLandsat = new TypeEarthSatelliteLandsat(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeFaq = new TypeFaq(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeFecPacs = new TypeFecPacs(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeFeccandidates = new TypeFeccandidates(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeFeed = new TypeFeed(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeFile = new TypeFile(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeFitsData = new TypeFitsData(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeFtp = new TypeFtp(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGadgetsCountdown = new TypeGadgetsCountdown(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGadgetsStock = new TypeGadgetsStock(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGadgetsWeather = new TypeGadgetsWeather(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGazeteerCensusTracts = new TypeGazeteerCensusTracts(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGazeteerCounties = new TypeGazeteerCounties(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGeoGe = new TypeGeoGe(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGeoGeotiff = new TypeGeoGeotiff(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGeoGpx = new TypeGeoGpx(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGeoHdf5 = new TypeGeoHdf5(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGeoKml = new TypeGeoKml(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGeoShapefile = new TypeGeoShapefile(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGeoShapefileFips = new TypeGeoShapefileFips(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGlossary = new TypeGlossary(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGridaggregation = new TypeGridaggregation(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeGroup = new TypeGroup(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeHipchatGroup = new TypeHipchatGroup(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeHomepage = new TypeHomepage(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeIncident = new TypeIncident(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeJeopardy = new TypeJeopardy(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeLatlonimage = new TypeLatlonimage(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeLidarCollection = new TypeLidarCollection(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeLidarLas = new TypeLidarLas(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeLidarLvis = new TypeLidarLvis(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeLink = new TypeLink(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeLocalfiles = new TypeLocalfiles(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeLocations = new TypeLocations(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeMapGooglemap = new TypeMapGooglemap(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeMediaAudiofile = new TypeMediaAudiofile(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeMediaImageloop = new TypeMediaImageloop(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeMediaPhotoalbum = new TypeMediaPhotoalbum(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeMediaVideoChannel = new TypeMediaVideoChannel(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeMediaVideoQuicktime = new TypeMediaVideoQuicktime(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeMediaYoutubevideo = new TypeMediaYoutubevideo(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeNotes = new TypeNotes(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeNotesJsonfile = new TypeNotesJsonfile(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeNotesNote = new TypeNotesNote(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeNotesNotebook = new TypeNotesNotebook(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeNwsfeed = new TypeNwsfeed(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeOpendaplink = new TypeOpendaplink(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeOwlClass = new TypeOwlClass(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeOwlOntology = new TypeOwlOntology(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typePasteitentry = new TypePasteitentry(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typePointText = new TypePointText(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typePoliceStopData = new TypePoliceStopData(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typePoll = new TypePoll(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectCampaign = new TypeProjectCampaign(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectCasestudy = new TypeProjectCasestudy(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectContribution = new TypeProjectContribution(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectDataformat = new TypeProjectDataformat(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectDataset = new TypeProjectDataset(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectDeployment = new TypeProjectDeployment(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectExperiment = new TypeProjectExperiment(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectFieldnote = new TypeProjectFieldnote(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectGpsControlpoints = new TypeProjectGpsControlpoints(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectGpsRaw = new TypeProjectGpsRaw(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectGpsRinex = new TypeProjectGpsRinex(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectInstrument = new TypeProjectInstrument(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectLearningResource = new TypeProjectLearningResource(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectMeeting = new TypeProjectMeeting(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectOrganization = new TypeProjectOrganization(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectProgram = new TypeProjectProgram(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectProject = new TypeProjectProject(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectService = new TypeProjectService(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectSite = new TypeProjectSite(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectSoftwarepackage = new TypeProjectSoftwarepackage(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectStandardName = new TypeProjectStandardName(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectSurveylocation = new TypeProjectSurveylocation(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectTerm = new TypeProjectTerm(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectVisit = new TypeProjectVisit(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeProjectVocabulary = new TypeProjectVocabulary(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typePropertySales = new TypePropertySales(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typePropertydb = new TypePropertydb(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typePythonNotebook = new TypePythonNotebook(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeSlackTeam = new TypeSlackTeam(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeStatusboard = new TypeStatusboard(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeSunrisesunset = new TypeSunrisesunset(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTasks = new TypeTasks(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTmdbmovies = new TypeTmdbmovies(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTodo = new TypeTodo(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTripEvent = new TypeTripEvent(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTripFlight = new TypeTripFlight(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTripHotel = new TypeTripHotel(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTripReport = new TypeTripReport(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTripTrip = new TypeTripTrip(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeAwcMetar = new TypeTypeAwcMetar(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeBizStockseries = new TypeTypeBizStockseries(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeBlsSeries = new TypeTypeBlsSeries(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeBlsSurvey = new TypeTypeBlsSurvey(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeCensusAcs = new TypeTypeCensusAcs(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeDaymet = new TypeTypeDaymet(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeDbTable = new TypeTypeDbTable(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeDocumentCsv = new TypeTypeDocumentCsv(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeDocumentDoc = new TypeTypeDocumentDoc(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeDocumentHtml = new TypeTypeDocumentHtml(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeDocumentPdf = new TypeTypeDocumentPdf(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeDocumentPpt = new TypeTypeDocumentPpt(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeDocumentXls = new TypeTypeDocumentXls(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeDrilsdownCasestudy = new TypeTypeDrilsdownCasestudy(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeEdgarFiling = new TypeTypeEdgarFiling(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeEiaCategory = new TypeTypeEiaCategory(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeEiaSeries = new TypeTypeEiaSeries(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeEsriFeatureserver = new TypeTypeEsriFeatureserver(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeEsriGeometryserver = new TypeTypeEsriGeometryserver(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeEsriGpserver = new TypeTypeEsriGpserver(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeEsriImageserver = new TypeTypeEsriImageserver(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeEsriLayer = new TypeTypeEsriLayer(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeEsriMapserver = new TypeTypeEsriMapserver(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeEsriRestfolder = new TypeTypeEsriRestfolder(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeEsriRestserver = new TypeTypeEsriRestserver(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeEsriRestservice = new TypeTypeEsriRestservice(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeExtremes = new TypeTypeExtremes(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeFredCategory = new TypeTypeFredCategory(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeFredSeries = new TypeTypeFredSeries(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeGtfsAgency = new TypeTypeGtfsAgency(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeGtfsRoute = new TypeTypeGtfsRoute(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeGtfsRoutes = new TypeTypeGtfsRoutes(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeGtfsStop = new TypeTypeGtfsStop(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeGtfsStops = new TypeTypeGtfsStops(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeGtfsTrip = new TypeTypeGtfsTrip(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeHazarddata = new TypeTypeHazarddata(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeHydroColorado = new TypeTypeHydroColorado(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeIdvBundle = new TypeTypeIdvBundle(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeImage = new TypeTypeImage(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeImageAirport = new TypeTypeImageAirport(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeImageWebcam = new TypeTypeImageWebcam(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeMb = new TypeTypeMb(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeMbCollection = new TypeTypeMbCollection(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeMbPointBasic = new TypeTypeMbPointBasic(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeMetametaDictionary = new TypeTypeMetametaDictionary(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeMetametaField = new TypeTypeMetametaField(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeNasaames = new TypeTypeNasaames(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeNcss = new TypeTypeNcss(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeNitf = new TypeTypeNitf(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointAmerifluxLevel2 = new TypeTypePointAmerifluxLevel2(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointAmrcFinal = new TypeTypePointAmrcFinal(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointAmrcFreewave = new TypeTypePointAmrcFreewave(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointCzo = new TypeTypePointCzo(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointGcnet = new TypeTypePointGcnet(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointGeomagIaga2002 = new TypeTypePointGeomagIaga2002(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointHydroWaterml = new TypeTypePointHydroWaterml(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointIcebridgeAtmIcessn = new TypeTypePointIcebridgeAtmIcessn(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointIcebridgeAtmQfit = new TypeTypePointIcebridgeAtmQfit(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointIcebridgeMccordsIrmcr2 = new TypeTypePointIcebridgeMccordsIrmcr2(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointIcebridgeMccordsIrmcr3 = new TypeTypePointIcebridgeMccordsIrmcr3(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointIcebridgeParis = new TypeTypePointIcebridgeParis(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointIdv = new TypeTypePointIdv(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointInline = new TypeTypePointInline(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointNcdcClimate = new TypeTypePointNcdcClimate(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointNetcdf = new TypeTypePointNetcdf(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointNoaaCarbon = new TypeTypePointNoaaCarbon(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointNoaaFlaskEvent = new TypeTypePointNoaaFlaskEvent(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointNoaaFlaskMonth = new TypeTypePointNoaaFlaskMonth(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointNoaaMadis = new TypeTypePointNoaaMadis(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointNoaaTower = new TypeTypePointNoaaTower(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointOceanCnv = new TypeTypePointOceanCnv(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointOceanCsvSadoTTS = new TypeTypePointOceanCsvSadoTts(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointOceanCsvSadoMeteo = new TypeTypePointOceanCsvSadoMeteo(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointOceanCsvSadoPosition = new TypeTypePointOceanCsvSadoPosition(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointOceanNetcdfGlider = new TypeTypePointOceanNetcdfGlider(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointOceanNetcdfTrack = new TypeTypePointOceanNetcdfTrack(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointOceanOoiDmgx = new TypeTypePointOceanOoiDmgx(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointOpenaq = new TypeTypePointOpenaq(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointPboPositionTimeSeries = new TypeTypePointPboPositionTimeSeries(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointSimpleRecords = new TypeTypePointSimpleRecords(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointSnotel = new TypeTypePointSnotel(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointText = new TypeTypePointText(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePointWsbbGgp = new TypeTypePointWsbbGgp(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypePsdMonthlyClimateIndex = new TypeTypePsdMonthlyClimateIndex(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeQuandlSeries = new TypeTypeQuandlSeries(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeServiceGroup = new TypeTypeServiceGroup(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeServiceLink = new TypeTypeServiceLink(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeSocrataSeries = new TypeTypeSocrataSeries(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeSoundingCod = new TypeTypeSoundingCod(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeSoundingFrd = new TypeTypeSoundingFrd(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeSoundingGsd = new TypeTypeSoundingGsd(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeSoundingWyoming = new TypeTypeSoundingWyoming(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeTmy = new TypeTypeTmy(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeTweet = new TypeTypeTweet(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeUsgsGauge = new TypeTypeUsgsGauge(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeVirtual = new TypeTypeVirtual(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeWmsCapabilities = new TypeTypeWmsCapabilities(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeTypeWmsLayer = new TypeTypeWmsLayer(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeUfoSightings = new TypeUfoSightings(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeUsPlaces = new TypeUsPlaces(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeVoteYesno = new TypeVoteYesno(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeWeblog = new TypeWeblog(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.typeWikipage = new TypeWikipage(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
	}
	
}