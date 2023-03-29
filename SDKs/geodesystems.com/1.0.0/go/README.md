# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/geodesystems.com/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.MediaTabularExtractsheetRequest{
        QueryParams: operations.MediaTabularExtractsheetQueryParams{
            Arg1: "unde",
            Entryid: "deserunt",
            Output: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.ServiceMediaTabularExtractsheet.MediaTabularExtractsheet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### ServiceMediaTabularExtractsheet

* `MediaTabularExtractsheet` - API for Extract sheets

### Type2017BoulderElectionExpenditures

* `Search2017BoulderElectionExpenditures` - Search API for '2017 Boulder Election Expenditures' entry type

### TypeAny

* `SearchAny` - Search API for 'Any file type' entry type

### TypeBeforeafter

* `SearchBeforeafter` - Search API for 'Before and After Images' entry type

### TypeBiblio

* `SearchBiblio` - Search API for 'Bibliographic Entry' entry type

### TypeBioDicom

* `SearchBioDicom` - Search API for 'DICOM File' entry type

### TypeBioDicomTest

* `SearchBioDicomTest` - Search API for 'DICOM Test File' entry type

### TypeBioFasta

* `SearchBioFasta` - Search API for 'FASTA File' entry type

### TypeBioFastq

* `SearchBioFastq` - Search API for 'FASTQ File' entry type

### TypeBioHmmerIndex

* `SearchBioHmmerIndex` - Search API for 'HMMER Index File' entry type

### TypeBioOmeTiff

* `SearchBioOmeTiff` - Search API for 'OME TIFF File' entry type

### TypeBioOntologyAssay

* `SearchBioOntologyAssay` - Search API for 'Assay' entry type

### TypeBioOntologyCohort

* `SearchBioOntologyCohort` - Search API for 'Cohort' entry type

### TypeBioOntologyPerson

* `SearchBioOntologyPerson` - Search API for 'Person' entry type

### TypeBioOntologySample

* `SearchBioOntologySample` - Search API for 'Sample' entry type

### TypeBioOntologySeries

* `SearchBioOntologySeries` - Search API for 'Series' entry type

### TypeBioOntologyStudy

* `SearchBioOntologyStudy` - Search API for 'Study' entry type

### TypeBioSam

* `SearchBioSam` - Search API for 'SAM Data' entry type

### TypeBioSfPdb

* `SearchBioSfPdb` - Search API for 'PDB Protein File' entry type

### TypeBioSra

* `SearchBioSra` - Search API for 'Sequence Read Archive' entry type

### TypeBioStockholm

* `SearchBioStockholm` - Search API for 'Stockholm File' entry type

### TypeBioTaxonomy

* `SearchBioTaxonomy` - Search API for 'Taxonomic Entry' entry type

### TypeBlogentry

* `SearchBlogentry` - Search API for 'Weblog Entry' entry type

### TypeBolderRentalHousing

* `SearchBolderRentalHousing` - Search API for 'Boulder Rental Housing' entry type

### TypeBookmarks

* `SearchBookmarks` - Search API for 'Bookmarks' entry type

### TypeBostonCrime

* `SearchBostonCrime` - Search API for 'Boston Crime' entry type

### TypeBoulder2017ElectionContributions

* `SearchBoulder2017ElectionContributions` - Search API for 'Boulder 2017 Election Contributions' entry type

### TypeBoulderCampaignContributions

* `SearchBoulderCampaignContributions` - Search API for 'Boulder Campaign Contributions' entry type

### TypeBoulderConsultingServices

* `SearchBoulderConsultingServices` - Search API for 'Boulder Consulting Services Database' entry type

### TypeBoulderCountyVoterDetails

* `SearchBoulderCountyVoterDetails` - Search API for 'Boulder County Voter Details' entry type

### TypeBoulderCrimes

* `SearchBoulderCrimes` - Search API for 'Boulder Crime Reports' entry type

### TypeBoulderEmails

* `SearchBoulderEmails` - Search API for 'Boulder Council Emails' entry type

### TypeBoulderEmployeeSalaries

* `SearchBoulderEmployeeSalaries` - Search API for 'Boulder Employee Salaries' entry type

### TypeCalendar

* `SearchCalendar` - Search API for 'Calendar' entry type

### TypeCampaignDonors

* `SearchCampaignDonors` - Search API for 'Campaign Donors' entry type

### TypeCampaignExpenditures

* `SearchCampaignExpenditures` - Search API for 'Campaign Expenditures' entry type

### TypeCataloglink

* `SearchCataloglink` - Search API for 'Catalog Link' entry type

### TypeCdmGrid

* `SearchCdmGrid` - Search API for 'Gridded Data File' entry type

### TypeChatroom

* `SearchChatroom` - Search API for 'Chat Room' entry type

### TypeColoradoWaterRights

* `SearchColoradoWaterRights` - Search API for 'Colorado Water Rights' entry type

### TypeCommitteeDonations

* `SearchCommitteeDonations` - Search API for 'Committee Donations' entry type

### TypeCommunityDatahub

* `SearchCommunityDatahub` - Search API for 'Data Hub' entry type

### TypeCommunityResource

* `SearchCommunityResource` - Search API for 'Facility' entry type

### TypeConstructionPermits

* `SearchConstructionPermits` - Search API for 'Construction Permits' entry type

### TypeContact

* `SearchContact` - Search API for 'Contact List' entry type

### TypeDbCoIndicators

* `SearchDbCoIndicators` - Search API for 'Colorado Health Indicators' entry type

### TypeEarthSatelliteLandsat

* `SearchEarthSatelliteLandsat` - Search API for 'Landsat Satellite Data' entry type

### TypeFaq

* `SearchFaq` - Search API for 'FAQ' entry type

### TypeFecPacs

* `SearchFecPacs` - Search API for 'FEC PACs' entry type

### TypeFeccandidates

* `SearchFeccandidates` - Search API for 'Candidates' entry type

### TypeFeed

* `SearchFeed` - Search API for 'RSS/ATOM Feed' entry type

### TypeFile

* `SearchFile` - Search API for 'File' entry type

### TypeFitsData

* `SearchFitsData` - Search API for 'FITS Data File' entry type

### TypeFtp

* `SearchFtp` - Search API for 'Remote FTP File View' entry type

### TypeGadgetsCountdown

* `SearchGadgetsCountdown` - Search API for 'Countdown' entry type

### TypeGadgetsStock

* `SearchGadgetsStock` - Search API for 'Stock Ticker' entry type

### TypeGadgetsWeather

* `SearchGadgetsWeather` - Search API for 'Weather' entry type

### TypeGazeteerCensusTracts

* `SearchGazeteerCensusTracts` - Search API for 'Census Tracts' entry type

### TypeGazeteerCounties

* `SearchGazeteerCounties` - Search API for 'Census Gazeteer Counties' entry type

### TypeGeoGe

* `SearchGeoGeojson` - Search API for 'GeoJson File' entry type

### TypeGeoGeotiff

* `SearchGeoGeotiff` - Search API for 'GeoTIFF' entry type

### TypeGeoGpx

* `SearchGeoGpx` - Search API for 'GPX GPS File' entry type

### TypeGeoHdf5

* `SearchGeoHdf5` - Search API for 'HDF5 File' entry type

### TypeGeoKml

* `SearchGeoKml` - Search API for 'KML/KMZ File' entry type

### TypeGeoShapefile

* `SearchGeoShapefile` - Search API for 'Shapefile' entry type

### TypeGeoShapefileFips

* `SearchGeoShapefileFips` - Search API for 'Shapefile with FIPS Code' entry type

### TypeGlossary

* `SearchGlossary` - Search API for 'Glossary' entry type

### TypeGridaggregation

* `SearchGridaggregation` - Search API for 'Grid Aggregation' entry type

### TypeGroup

* `SearchGroup` - Search API for 'Folder' entry type

### TypeHipchatGroup

* `SearchHipchatGroup` - Search API for 'HipChat Group' entry type

### TypeHomepage

* `SearchHomepage` - Search API for 'Home Page' entry type

### TypeIncident

* `SearchIncident` - Search API for 'Incident' entry type

### TypeJeopardy

* `SearchJeopardy` - Search API for 'Jeopardy' entry type

### TypeLatlonimage

* `SearchLatlonimage` - Search API for 'Lat-Lon Image' entry type

### TypeLidarCollection

* `SearchLidarCollection` - Search API for 'LiDAR Collection' entry type

### TypeLidarLas

* `SearchLidarLas` - Search API for 'LAS Lidar Data' entry type

### TypeLidarLvis

* `SearchLidarLvis` - Search API for 'LVIS Lidar Data' entry type

### TypeLink

* `SearchLink` - Search API for 'Link' entry type

### TypeLocalfiles

* `SearchLocalfiles` - Search API for 'Server Side Files' entry type

### TypeLocations

* `SearchLocations` - Search API for 'Locations' entry type

### TypeMapGooglemap

* `SearchMapGooglemap` - Search API for 'Google Map URL' entry type

### TypeMediaAudiofile

* `SearchMediaAudiofile` - Search API for 'Audio File' entry type

### TypeMediaImageloop

* `SearchMediaImageloop` - Search API for 'Image Loop' entry type

### TypeMediaPhotoalbum

* `SearchMediaPhotoalbum` - Search API for 'Photo Album' entry type

### TypeMediaVideoChannel

* `SearchMediaVideoChannel` - Search API for 'Video Channel' entry type

### TypeMediaVideoQuicktime

* `SearchMediaVideoQuicktime` - Search API for 'Quicktime Video' entry type

### TypeMediaYoutubevideo

* `SearchMediaYoutubevideo` - Search API for 'YouTube Video' entry type

### TypeNotes

* `SearchNotes` - Search API for 'Notes' entry type

### TypeNotesJsonfile

* `SearchNotesJsonfile` - Search API for 'Json File' entry type

### TypeNotesNote

* `SearchNotesNote` - Search API for 'Note' entry type

### TypeNotesNotebook

* `SearchNotesNotebook` - Search API for 'Notebook' entry type

### TypeNwsfeed

* `SearchNwsfeed` - Search API for 'NWS Forecast Feed' entry type

### TypeOpendaplink

* `SearchOpendaplink` - Search API for 'OPeNDAP Link' entry type

### TypeOwlClass

* `SearchOwlClass` - Search API for 'OWL Class' entry type

### TypeOwlOntology

* `SearchOwlOntology` - Search API for 'OWL Ontology' entry type

### TypePasteitentry

* `SearchPasteitentry` - Search API for 'Paste Text Entry' entry type

### TypePointText

* `SearchPointText` - Search API for 'Text Point Data' entry type

### TypePoliceStopData

* `SearchPoliceStopData` - Search API for 'Police Stop Data' entry type

### TypePoll

* `SearchPoll` - Search API for 'Poll' entry type

### TypeProjectCampaign

* `SearchProjectCampaign` - Search API for 'Campaign' entry type

### TypeProjectCasestudy

* `SearchProjectCasestudy` - Search API for 'Case Study' entry type

### TypeProjectContribution

* `SearchProjectContribution` - Search API for 'Research Contribution' entry type

### TypeProjectDataformat

* `SearchProjectDataformat` - Search API for 'Data Format' entry type

### TypeProjectDataset

* `SearchProjectDataset` - Search API for 'Dataset' entry type

### TypeProjectDeployment

* `SearchProjectDeployment` - Search API for 'Deployment' entry type

### TypeProjectExperiment

* `SearchProjectExperiment` - Search API for 'Experiment' entry type

### TypeProjectFieldnote

* `SearchProjectFieldnote` - Search API for 'Field Note' entry type

### TypeProjectGpsControlpoints

* `SearchProjectGpsControlpoints` - Search API for 'Control Points File' entry type

### TypeProjectGpsRaw

* `SearchProjectGpsRaw` - Search API for 'Raw GPS File' entry type

### TypeProjectGpsRinex

* `SearchProjectGpsRinex` - Search API for 'RINEX File' entry type

### TypeProjectInstrument

* `SearchProjectInstrument` - Search API for 'Instrument Data Collection' entry type

### TypeProjectLearningResource

* `SearchProjectLearningResource` - Search API for 'Teaching Resource' entry type

### TypeProjectMeeting

* `SearchProjectMeeting` - Search API for 'Meeting' entry type

### TypeProjectOrganization

* `SearchProjectOrganization` - Search API for 'Organization' entry type

### TypeProjectProgram

* `SearchProjectProgram` - Search API for 'Program' entry type

### TypeProjectProject

* `SearchProjectProject` - Search API for 'Project' entry type

### TypeProjectService

* `SearchProjectService` - Search API for 'Data Access Service' entry type

### TypeProjectSite

* `SearchProjectSite` - Search API for 'Site' entry type

### TypeProjectSoftwarepackage

* `SearchProjectSoftwarepackage` - Search API for 'Software Tool' entry type

### TypeProjectStandardName

* `SearchProjectStandardName` - Search API for 'Standard Parameter Name' entry type

### TypeProjectSurveylocation

* `SearchProjectSurveylocation` - Search API for 'Survey Location' entry type

### TypeProjectTerm

* `SearchProjectTerm` - Search API for 'Vocabulary Term' entry type

### TypeProjectVisit

* `SearchProjectVisit` - Search API for 'Site Visit' entry type

### TypeProjectVocabulary

* `SearchProjectVocabulary` - Search API for 'Vocabulary' entry type

### TypePropertySales

* `SearchPropertySales` - Search API for 'Property Sales' entry type

### TypePropertydb

* `SearchPropertydb` - Search API for 'Property Database' entry type

### TypePythonNotebook

* `SearchPythonNotebook` - Search API for 'IPython Notebook file' entry type

### TypeSlackTeam

* `SearchSlackTeam` - Search API for 'Slack Team' entry type

### TypeStatusboard

* `SearchStatusboard` - Search API for 'Status Board' entry type

### TypeSunrisesunset

* `SearchSunrisesunset` - Search API for 'Sunrise/Sunset Display' entry type

### TypeTasks

* `SearchTasks` - Search API for 'Tasks' entry type

### TypeTmdbmovies

* `SearchTmdbmovies` - Search API for 'Tmdb Movies' entry type

### TypeTodo

* `SearchTodo` - Search API for 'Todo' entry type

### TypeTripEvent

* `SearchTripEvent` - Search API for 'Event' entry type

### TypeTripFlight

* `SearchTripFlight` - Search API for 'Flight Leg' entry type

### TypeTripHotel

* `SearchTripHotel` - Search API for 'Lodging' entry type

### TypeTripReport

* `SearchTripReport` - Search API for 'Trip Report' entry type

### TypeTripTrip

* `SearchTripTrip` - Search API for 'Trip' entry type

### TypeTypeAwcMetar

* `SearchTypeAwcMetar` - Search API for 'AWC Weather Observations' entry type

### TypeTypeBizStockseries

* `SearchTypeBizStockseries` - Search API for 'Stock Ticker Data' entry type

### TypeTypeBlsSeries

* `SearchTypeBlsSeries` - Search API for 'BLS Series' entry type

### TypeTypeBlsSurvey

* `SearchTypeBlsSurvey` - Search API for 'BLS Survey' entry type

### TypeTypeCensusAcs

* `SearchTypeCensusAcs` - Search API for 'US Census ACS Data' entry type

### TypeTypeDaymet

* `SearchTypeDaymet` - Search API for 'Daymet Daily Weather' entry type

### TypeTypeDbTable

* `SearchTypeDbTable` - Search API for 'Database Table' entry type

### TypeTypeDocumentCsv

* `SearchTypeDocumentCsv` - Search API for 'CSV File' entry type

### TypeTypeDocumentDoc

* `SearchTypeDocumentDoc` - Search API for 'Word File' entry type

### TypeTypeDocumentHTML

* `SearchTypeDocumentHTML` - Search API for 'HTML File' entry type

### TypeTypeDocumentPdf

* `SearchTypeDocumentPdf` - Search API for 'PDF File' entry type

### TypeTypeDocumentPpt

* `SearchTypeDocumentPpt` - Search API for 'Powerpoint File' entry type

### TypeTypeDocumentXls

* `SearchTypeDocumentXls` - Search API for 'Excel File' entry type

### TypeTypeDrilsdownCasestudy

* `SearchTypeDrilsdownCasestudy` - Search API for 'Drilsdown Case Study' entry type

### TypeTypeEdgarFiling

* `SearchTypeEdgarFiling` - Search API for 'SEC EDGAR Filing' entry type

### TypeTypeEiaCategory

* `SearchTypeEiaCategory` - Search API for 'EIA Category' entry type

### TypeTypeEiaSeries

* `SearchTypeEiaSeries` - Search API for 'EIA Series' entry type

### TypeTypeEsriFeatureserver

* `SearchTypeEsriFeatureserver` - Search API for 'ESRI Feature Server' entry type

### TypeTypeEsriGeometryserver

* `SearchTypeEsriGeometryserver` - Search API for 'ESRI Geometry Server' entry type

### TypeTypeEsriGpserver

* `SearchTypeEsriGpserver` - Search API for 'ESRI GP Server' entry type

### TypeTypeEsriImageserver

* `SearchTypeEsriImageserver` - Search API for 'ESRI Image Server' entry type

### TypeTypeEsriLayer

* `SearchTypeEsriLayer` - Search API for 'ESRI Layer' entry type

### TypeTypeEsriMapserver

* `SearchTypeEsriMapserver` - Search API for 'ESRI Map Server' entry type

### TypeTypeEsriRestfolder

* `SearchTypeEsriRestfolder` - Search API for 'ESRI Services Folder' entry type

### TypeTypeEsriRestserver

* `SearchTypeEsriRestserver` - Search API for 'ESRI Web Server' entry type

### TypeTypeEsriRestservice

* `SearchTypeEsriRestservice` - Search API for 'ESRI Rest Service' entry type

### TypeTypeExtremes

* `SearchTypeExtremes` - Search API for 'NOAA Extremes Data' entry type

### TypeTypeFredCategory

* `SearchTypeFredCategory` - Search API for 'FRED Category' entry type

### TypeTypeFredSeries

* `SearchTypeFredSeries` - Search API for 'FRED Series' entry type

### TypeTypeGtfsAgency

* `SearchTypeGtfsAgency` - Search API for 'Transit Agency' entry type

### TypeTypeGtfsRoute

* `SearchTypeGtfsRoute` - Search API for 'Transit Route' entry type

### TypeTypeGtfsRoutes

* `SearchTypeGtfsRoutes` - Search API for 'Transit Route Collection' entry type

### TypeTypeGtfsStop

* `SearchTypeGtfsStop` - Search API for 'Transit Stop' entry type

### TypeTypeGtfsStops

* `SearchTypeGtfsStops` - Search API for 'Transit Stop Collection' entry type

### TypeTypeGtfsTrip

* `SearchTypeGtfsTrip` - Search API for 'Transit Trip' entry type

### TypeTypeHazarddata

* `SearchTypeHazarddata` - Search API for 'Hazard Data' entry type

### TypeTypeHydroColorado

* `SearchTypeHydroColorado` - Search API for 'Colorado DNR Stream Gage' entry type

### TypeTypeIdvBundle

* `SearchTypeIdvBundle` - Search API for 'IDV Bundle' entry type

### TypeTypeImage

* `SearchTypeImage` - Search API for 'Image' entry type

### TypeTypeImageAirport

* `SearchTypeImageAirport` - Search API for 'Airport Image' entry type

### TypeTypeImageWebcam

* `SearchTypeImageWebcam` - Search API for 'Webcam' entry type

### TypeTypeMb

* `SearchTypeMb` - Search API for 'MB Bathymetry' entry type

### TypeTypeMbCollection

* `SearchTypeMbCollection` - Search API for 'Bathymetry Collection' entry type

### TypeTypeMbPointBasic

* `SearchTypeMbPointBasic` - Search API for 'Basic MB point file' entry type

### TypeTypeMetametaDictionary

* `SearchTypeMetametaDictionary` - Search API for 'Metadata Dictionary' entry type

### TypeTypeMetametaField

* `SearchTypeMetametaField` - Search API for 'Metadata Field' entry type

### TypeTypeNasaames

* `SearchTypeNasaames` - Search API for 'NASA AMES File' entry type

### TypeTypeNcss

* `SearchTypeNcss` - Search API for 'NetCDF Point Subset' entry type

### TypeTypeNitf

* `SearchTypeNitf` - Search API for 'NITF File' entry type

### TypeTypePointAmerifluxLevel2

* `SearchTypePointAmerifluxLevel2` - Search API for 'Ameriflux Level 2 CSV File' entry type

### TypeTypePointAmrcFinal

* `SearchTypePointAmrcFinal` - Search API for 'AMRC Final QC Data' entry type

### TypeTypePointAmrcFreewave

* `SearchTypePointAmrcFreewave` - Search API for 'AMRC Freewave  Data' entry type

### TypeTypePointCzo

* `SearchTypePointCzo` - Search API for 'CZO Display File Format' entry type

### TypeTypePointGcnet

* `SearchTypePointGcnet` - Search API for 'GC-Net Point Data' entry type

### TypeTypePointGeomagIaga2002

* `SearchTypePointGeomagIaga2002` - Search API for 'IAGA 2002 Geomagnetism Data' entry type

### TypeTypePointHydroWaterml

* `SearchTypePointHydroWaterml` - Search API for 'WaterML' entry type

### TypeTypePointIcebridgeAtmIcessn

* `SearchTypePointIcebridgeAtmIcessn` - Search API for 'ATM Ice SSN Data' entry type

### TypeTypePointIcebridgeAtmQfit

* `SearchTypePointIcebridgeAtmQfit` - Search API for 'ATM QFIT Data' entry type

### TypeTypePointIcebridgeMccordsIrmcr2

* `SearchTypePointIcebridgeMccordsIrmcr2` - Search API for 'McCords Irmcr2 Data' entry type

### TypeTypePointIcebridgeMccordsIrmcr3

* `SearchTypePointIcebridgeMccordsIrmcr3` - Search API for 'McCords Irmcr3 Data' entry type

### TypeTypePointIcebridgeParis

* `SearchTypePointIcebridgeParis` - Search API for 'Paris Data' entry type

### TypeTypePointIdv

* `SearchTypePointIdv` - Search API for 'IDV Point File' entry type

### TypeTypePointInline

* `SearchTypePointInline` - Search API for 'Inline Point File' entry type

### TypeTypePointNcdcClimate

* `SearchTypePointNcdcClimate` - Search API for 'NC  DC Climate Data' entry type

### TypeTypePointNetcdf

* `SearchTypePointNetcdf` - Search API for 'NetCDF Point File' entry type

### TypeTypePointNoaaCarbon

* `SearchTypePointNoaaCarbon` - Search API for 'NOAA Carbon Measurements' entry type

### TypeTypePointNoaaFlaskEvent

* `SearchTypePointNoaaFlaskEvent` - Search API for 'NOAA Flask Event Measurements' entry type

### TypeTypePointNoaaFlaskMonth

* `SearchTypePointNoaaFlaskMonth` - Search API for 'NOAA Flask Month Measurements' entry type

### TypeTypePointNoaaMadis

* `SearchTypePointNoaaMadis` - Search API for 'NOAA MADIS Point Data' entry type

### TypeTypePointNoaaTower

* `SearchTypePointNoaaTower` - Search API for 'NOAA Tower Network' entry type

### TypeTypePointOceanCnv

* `SearchTypePointOceanCnv` - Search API for 'SeaBird CNV Data' entry type

### TypeTypePointOceanCsvSadoTTS

* `SearchTypePointOceanCsvSadoTTS` - Search API for 'SADO TTS Data' entry type

### TypeTypePointOceanCsvSadoMeteo

* `SearchTypePointOceanCsvSadoMeteo` - Search API for 'SADO Meteo Data' entry type

### TypeTypePointOceanCsvSadoPosition

* `SearchTypePointOceanCsvSadoPosition` - Search API for 'SADO Position Data' entry type

### TypeTypePointOceanNetcdfGlider

* `SearchTypePointOceanNetcdfGlider` - Search API for 'NetCDF Glider Data' entry type

### TypeTypePointOceanNetcdfTrack

* `SearchTypePointOceanNetcdfTrack` - Search API for 'NetCDF Track Data' entry type

### TypeTypePointOceanOoiDmgx

* `SearchTypePointOceanOoiDmgx` - Search API for 'OOI Data' entry type

### TypeTypePointOpenaq

* `SearchTypePointOpenaq` - Search API for 'Open AQ Air Quality' entry type

### TypeTypePointPboPositionTimeSeries

* `SearchTypePointPboPositionTimeSeries` - Search API for 'PBO Position Time Series' entry type

### TypeTypePointSimpleRecords

* `SearchTypePointSimpleRecords` - Search API for 'Simple Records' entry type

### TypeTypePointSnotel

* `SearchTypePointSnotel` - Search API for 'SNOTEL Snow Data' entry type

### TypeTypePointText

* `SearchTypePointText` - Search API for 'Record Text File' entry type

### TypeTypePointWsbbGgp

* `SearchTypePointWsbbGgp` - Search API for 'Global Geodynamics GGP Format' entry type

### TypeTypePsdMonthlyClimateIndex

* `SearchTypePsdMonthlyClimateIndex` - Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

### TypeTypeQuandlSeries

* `SearchTypeQuandlSeries` - Search API for 'QUANDL Series' entry type

### TypeTypeServiceGroup

* `SearchTypeServiceGroup` - Search API for 'Service Group' entry type

### TypeTypeServiceLink

* `SearchTypeServiceLink` - Search API for 'Service Link' entry type

### TypeTypeSocrataSeries

* `SearchTypeSocrataSeries` - Search API for 'SOCRATA Series' entry type

### TypeTypeSoundingCod

* `SearchTypeSoundingCod` - Search API for 'COD Sounding' entry type

### TypeTypeSoundingFrd

* `SearchTypeSoundingFrd` - Search API for 'FRD Sounding' entry type

### TypeTypeSoundingGsd

* `SearchTypeSoundingGsd` - Search API for 'GSD Sounding' entry type

### TypeTypeSoundingWyoming

* `SearchTypeSoundingWyoming` - Search API for 'UW Sounding' entry type

### TypeTypeTmy

* `SearchTypeTmy` - Search API for 'NREL TMY Data' entry type

### TypeTypeTweet

* `SearchTypeTweet` - Search API for 'Tweet' entry type

### TypeTypeUsgsGauge

* `SearchTypeUsgsGauge` - Search API for 'USGS Stream Gauge' entry type

### TypeTypeVirtual

* `SearchTypeVirtual` - Search API for 'Virtual Group' entry type

### TypeTypeWmsCapabilities

* `SearchTypeWmsCapabilities` - Search API for 'WMS Capabilities' entry type

### TypeTypeWmsLayer

* `SearchTypeWmsLayer` - Search API for 'WMS Layer' entry type

### TypeUfoSightings

* `SearchUfoSightings` - Search API for 'Ufo Sightings' entry type

### TypeUsPlaces

* `SearchUsPlaces` - Search API for 'US Places' entry type

### TypeVoteYesno

* `SearchVoteYesno` - Search API for 'Simple Yes-No Vote' entry type

### TypeWeblog

* `SearchWeblog` - Search API for 'Weblog' entry type

### TypeWikipage

* `SearchWikipage` - Search API for 'Wiki Page' entry type
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
