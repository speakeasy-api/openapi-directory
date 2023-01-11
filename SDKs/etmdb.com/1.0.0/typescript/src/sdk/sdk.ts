import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Cinema } from "./cinema";
import { CinemaDetail } from "./cinemadetail";
import { CinemaSchedule } from "./cinemaschedule";
import { CinemaSheduleShowtime } from "./cinemasheduleshowtime";
import { Company } from "./company";
import { CompanyCredits } from "./companycredits";
import { Filmography } from "./filmography";
import { FilmographyType } from "./filmographytype";
import { Genre } from "./genre";
import { GenreType } from "./genretype";
import { Job } from "./job";
import { Media } from "./media";
import { Movie } from "./movie";
import { MovieCast } from "./moviecast";
import { News } from "./news";
import { People } from "./people";
import { Showtime } from "./showtime";
import { Watchlist } from "./watchlist";


export const ServerList = [
	"https://etmdb.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public cinema: Cinema;
  public cinemaDetail: CinemaDetail;
  public cinemaSchedule: CinemaSchedule;
  public cinemaSheduleShowtime: CinemaSheduleShowtime;
  public company: Company;
  public companyCredits: CompanyCredits;
  public filmography: Filmography;
  public filmographyType: FilmographyType;
  public genre: Genre;
  public genreType: GenreType;
  public job: Job;
  public media: Media;
  public movie: Movie;
  public movieCast: MovieCast;
  public news: News;
  public people: People;
  public showtime: Showtime;
  public watchlist: Watchlist;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.cinema = new Cinema(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.cinemaDetail = new CinemaDetail(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.cinemaSchedule = new CinemaSchedule(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.cinemaSheduleShowtime = new CinemaSheduleShowtime(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.company = new Company(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.companyCredits = new CompanyCredits(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.filmography = new Filmography(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.filmographyType = new FilmographyType(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.genre = new Genre(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.genreType = new GenreType(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.job = new Job(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.media = new Media(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.movie = new Movie(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.movieCast = new MovieCast(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.news = new News(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.people = new People(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.showtime = new Showtime(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.watchlist = new Watchlist(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}